import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import localforage from 'localforage';
import { demoScripts } from './demoData';

const db = localforage.createInstance({ name: 'scriptweaver', storeName: 'data' });

let counter = 50000;
function uid(prefix) {
  return `${prefix}-${++counter}`;
}

const useScriptStore = create(
  subscribeWithSelector((set, get) => ({
    // ─── Session state ───
    ready: false,
    demoMode: false,
    userScripts: [],
    selectedScriptId: null,
    selectedChapterId: null,
    selectedBlockId: null,

    // Computed: returns the active dataset
    get scripts() {
      const state = get();
      return state.demoMode ? demoScripts : state.userScripts;
    },

    // ─── Bootstrap ───
    init: async () => {
      const saved = await db.getItem('userScripts');
      const savedMode = await db.getItem('demoMode');
      if (saved) {
        const maxId = findMaxCounter(saved);
        if (maxId > counter) counter = maxId;
      }
      set({
        userScripts: saved || [],
        demoMode: savedMode === true,
        ready: true,
      });
    },

    toggleDemoMode: () => {
      const next = !get().demoMode;
      db.setItem('demoMode', next);
      set({ demoMode: next, selectedScriptId: null, selectedChapterId: null, selectedBlockId: null });
    },

    // ─── Navigation ───
    selectScript: (scriptId) => set({ selectedScriptId: scriptId }),
    selectChapter: (chapterId) => set({ selectedChapterId: chapterId }),
    goBackToTopics: () => set({ selectedScriptId: null, selectedChapterId: null, selectedBlockId: null }),
    goBack: () => set({ selectedChapterId: null, selectedBlockId: null }),

    // Add topic
    addScript: (title) =>
      set((state) => ({
        userScripts: [...state.userScripts, {
          id: uid('script'),
          title: title || 'Untitled Script',
          image: `https://picsum.photos/id/${Math.floor(Math.random() * 80) + 20}/400/300`,
          chapters: [],
        }],
      })),

    // Add chapter
    addChapter: (scriptId, title) =>
      set((state) => ({
        userScripts: state.userScripts.map((s) => {
          if (s.id !== scriptId) return s;
          const maxOrder = s.chapters.reduce((m, c) => Math.max(m, c.order), -1);
          return {
            ...s,
            chapters: [...s.chapters, {
              id: uid('ch'),
              title: title || 'New Chapter',
              order: maxOrder + 1,
              description: '',
              image: `https://picsum.photos/id/${Math.floor(Math.random() * 80) + 20}/400/300`,
              ideas: [],
            }],
          };
        }),
      })),

    // Update topic title
    updateScriptTitle: (scriptId, title) =>
      set((state) => ({
        userScripts: state.userScripts.map((s) =>
          s.id === scriptId ? { ...s, title } : s
        ),
      })),

    // Update chapter title
    updateChapterTitle: (chapterId, title) =>
      set((state) => ({
        userScripts: state.userScripts.map((s) => ({
          ...s,
          chapters: s.chapters.map((c) =>
            c.id === chapterId ? { ...c, title } : c
          ),
        })),
      })),

    // Update chapter description
    updateChapterDescription: (chapterId, description) =>
      set((state) => ({
        userScripts: state.userScripts.map((s) => ({
          ...s,
          chapters: s.chapters.map((c) =>
            c.id === chapterId ? { ...c, description } : c
          ),
        })),
      })),

    // Current script helper
    getScript: () => {
      const state = get();
      const scripts = state.demoMode ? demoScripts : state.userScripts;
      return scripts.find((s) => s.id === state.selectedScriptId) || null;
    },

    // Chapter navigation (swipe)
    navigateChapter: (direction) => {
      const state = get();
      const scripts = state.demoMode ? demoScripts : state.userScripts;
      const script = scripts.find((s) => s.id === state.selectedScriptId);
      if (!script) return;
      const sorted = [...script.chapters].sort((a, b) => a.order - b.order);
      const idx = sorted.findIndex((c) => c.id === state.selectedChapterId);
      if (idx === -1) return;
      const nextIdx = idx + direction;
      if (nextIdx >= 0 && nextIdx < sorted.length) {
        set({ selectedChapterId: sorted[nextIdx].id, selectedBlockId: null });
      }
    },

    getChapterNav: () => {
      const state = get();
      const scripts = state.demoMode ? demoScripts : state.userScripts;
      const script = scripts.find((s) => s.id === state.selectedScriptId);
      if (!script) return { hasPrev: false, hasNext: false };
      const sorted = [...script.chapters].sort((a, b) => a.order - b.order);
      const idx = sorted.findIndex((c) => c.id === state.selectedChapterId);
      return { hasPrev: idx > 0, hasNext: idx < sorted.length - 1 };
    },

    // ─── Idea CRUD ───
    toggleIdeaCollapsed: (ideaId) =>
      set((state) => ({
        userScripts: updateIdeaInScripts(state.userScripts, ideaId, (idea) => ({
          ...idea,
          collapsed: !idea.collapsed,
        })),
      })),

    addIdea: (chapterId, title) =>
      set((state) => ({
        userScripts: state.userScripts.map((script) => ({
          ...script,
          chapters: script.chapters.map((ch) => {
            if (ch.id !== chapterId) return ch;
            const maxOrder = ch.ideas.reduce((m, i) => Math.max(m, i.order), -1);
            const newIdea = {
              id: uid('idea'),
              type: 'idea',
              title: title || 'New idea',
              order: maxOrder + 1,
              collapsed: false,
              sentenceBlocks: [],
            };
            return { ...ch, ideas: [...ch.ideas, newIdea] };
          }),
        })),
      })),

    addExample: (chapterId, title) =>
      set((state) => ({
        userScripts: state.userScripts.map((script) => ({
          ...script,
          chapters: script.chapters.map((ch) => {
            if (ch.id !== chapterId) return ch;
            const maxOrder = ch.ideas.reduce((m, i) => Math.max(m, i.order), -1);
            const newExample = {
              id: uid('idea'),
              type: 'example',
              title: title || 'New example',
              order: maxOrder + 1,
              collapsed: false,
              image: '',
              caption: '',
              sentenceBlocks: [],
            };
            return { ...ch, ideas: [...ch.ideas, newExample] };
          }),
        })),
      })),

    updateIdeaImage: (ideaId, imageUrl) =>
      set((state) => ({
        userScripts: updateIdeaInScripts(state.userScripts, ideaId, (idea) => ({
          ...idea,
          image: imageUrl,
        })),
      })),

    updateIdeaCaption: (ideaId, caption) =>
      set((state) => ({
        userScripts: updateIdeaInScripts(state.userScripts, ideaId, (idea) => ({
          ...idea,
          caption,
        })),
      })),

    updateIdeaTitle: (ideaId, newTitle) =>
      set((state) => ({
        userScripts: updateIdeaInScripts(state.userScripts, ideaId, (idea) => ({
          ...idea,
          title: newTitle,
        })),
      })),

    deleteIdea: (ideaId) =>
      set((state) => ({
        userScripts: state.userScripts.map((script) => ({
          ...script,
          chapters: script.chapters.map((ch) => ({
            ...ch,
            ideas: ch.ideas.filter((idea) => idea.id !== ideaId),
          })),
        })),
      })),

    addSentenceToIdea: (ideaId, text) =>
      set((state) => ({
        userScripts: updateIdeaInScripts(state.userScripts, ideaId, (idea) => {
          const maxOrder = idea.sentenceBlocks.reduce((m, sb) => Math.max(m, sb.order), -1);
          const vId = uid('v');
          const newBlock = {
            id: uid('sb'),
            order: maxOrder + 1,
            activeVersionId: vId,
            versions: [{ id: vId, text: text || 'New sentence.' }],
          };
          return { ...idea, sentenceBlocks: [...idea.sentenceBlocks, newBlock] };
        }),
      })),

    // ─── Micro-editor ───
    selectBlock: (blockId) => set({ selectedBlockId: blockId }),
    clearSelection: () => set({ selectedBlockId: null }),

    navigateBlock: (direction) => {
      const state = get();
      const scripts = state.demoMode ? demoScripts : state.userScripts;
      if (!state.selectedBlockId || !state.selectedChapterId || !state.selectedScriptId) return;
      const script = scripts.find((s) => s.id === state.selectedScriptId);
      if (!script) return;
      const chapter = script.chapters.find((c) => c.id === state.selectedChapterId);
      if (!chapter) return;
      const allBlocks = [];
      for (const idea of chapter.ideas) {
        for (const sb of idea.sentenceBlocks) {
          allBlocks.push(sb);
        }
      }
      const idx = allBlocks.findIndex((b) => b.id === state.selectedBlockId);
      const nextIdx = idx + direction;
      if (nextIdx >= 0 && nextIdx < allBlocks.length) {
        set({ selectedBlockId: allBlocks[nextIdx].id });
      }
    },

    getSelectedBlockWithContext: () => {
      const state = get();
      const scripts = state.demoMode ? demoScripts : state.userScripts;
      if (!state.selectedBlockId || !state.selectedChapterId || !state.selectedScriptId) return null;

      const script = scripts.find((s) => s.id === state.selectedScriptId);
      if (!script) return null;
      const chapter = script.chapters.find((c) => c.id === state.selectedChapterId);
      if (!chapter) return null;

      const allBlocks = [];
      for (const idea of chapter.ideas) {
        for (const sb of idea.sentenceBlocks) {
          allBlocks.push(sb);
        }
      }

      const idx = allBlocks.findIndex((b) => b.id === state.selectedBlockId);
      if (idx === -1) return null;

      const getActiveText = (block) => {
        const v = block.versions.find((ver) => ver.id === block.activeVersionId);
        return v ? v.text : '';
      };

      return {
        block: allBlocks[idx],
        prevText: idx > 0 ? getActiveText(allBlocks[idx - 1]) : null,
        nextText: idx < allBlocks.length - 1 ? getActiveText(allBlocks[idx + 1]) : null,
        hasPrev: idx > 0,
        hasNext: idx < allBlocks.length - 1,
      };
    },

    // ─── Version actions ───
    setActiveVersion: (blockId, versionId) =>
      set((state) => ({
        userScripts: updateBlockInScripts(state.userScripts, blockId, (block) => ({
          ...block,
          activeVersionId: versionId,
        })),
      })),

    duplicateVersion: (blockId, versionId) =>
      set((state) => ({
        userScripts: updateBlockInScripts(state.userScripts, blockId, (block) => {
          const source = block.versions.find((v) => v.id === versionId);
          if (!source) return block;
          const newId = uid('v');
          return {
            ...block,
            versions: [...block.versions, { id: newId, text: source.text }],
          };
        }),
      })),

    updateVersionText: (blockId, versionId, newText) =>
      set((state) => ({
        userScripts: updateBlockInScripts(state.userScripts, blockId, (block) => ({
          ...block,
          versions: block.versions.map((v) =>
            v.id === versionId ? { ...v, text: newText } : v
          ),
        })),
      })),

    deleteVersion: (blockId, versionId) =>
      set((state) => ({
        userScripts: updateBlockInScripts(state.userScripts, blockId, (block) => {
          if (block.versions.length <= 1) return block;
          const filtered = block.versions.filter((v) => v.id !== versionId);
          const newActive =
            block.activeVersionId === versionId
              ? filtered[0].id
              : block.activeVersionId;
          return { ...block, versions: filtered, activeVersionId: newActive };
        }),
      })),
  }))
);

// ─── Auto-persist: save userScripts to IndexedDB on every change ───
let saveTimer = null;
useScriptStore.subscribe(
  (state) => state.userScripts,
  (userScripts) => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      db.setItem('userScripts', userScripts);
    }, 500);
  }
);

// ─── Helpers ───
function findMaxCounter(scripts) {
  let max = 0;
  for (const s of scripts) {
    max = Math.max(max, parseId(s.id));
    for (const ch of s.chapters) {
      max = Math.max(max, parseId(ch.id));
      for (const idea of ch.ideas) {
        max = Math.max(max, parseId(idea.id));
        for (const sb of idea.sentenceBlocks) {
          max = Math.max(max, parseId(sb.id));
          for (const v of sb.versions) {
            max = Math.max(max, parseId(v.id));
          }
        }
      }
    }
  }
  return max;
}

function parseId(id) {
  const n = parseInt(id?.split('-').pop(), 10);
  return isNaN(n) ? 0 : n;
}

function updateIdeaInScripts(scripts, ideaId, updater) {
  return scripts.map((script) => ({
    ...script,
    chapters: script.chapters.map((ch) => ({
      ...ch,
      ideas: ch.ideas.map((idea) =>
        idea.id === ideaId ? updater(idea) : idea
      ),
    })),
  }));
}

function updateBlockInScripts(scripts, blockId, updater) {
  return scripts.map((script) => ({
    ...script,
    chapters: script.chapters.map((ch) => ({
      ...ch,
      ideas: ch.ideas.map((idea) => ({
        ...idea,
        sentenceBlocks: idea.sentenceBlocks.map((sb) =>
          sb.id === blockId ? updater(sb) : sb
        ),
      })),
    })),
  }));
}

export default useScriptStore;
