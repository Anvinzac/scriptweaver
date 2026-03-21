import { useEffect } from 'react';
import useScriptStore from './store/useScriptStore';
import TopicsView from './components/TopicsView';
import OutlinerView from './components/OutlinerView';
import ReaderView from './components/ReaderView';

export default function App() {
  const ready = useScriptStore((s) => s.ready);
  const selectedScriptId = useScriptStore((s) => s.selectedScriptId);
  const selectedChapterId = useScriptStore((s) => s.selectedChapterId);
  const init = useScriptStore((s) => s.init);

  useEffect(() => {
    init();
  }, [init]);

  if (!ready) {
    return (
      <div className="min-h-dvh bg-cream flex items-center justify-center">
        <div className="text-ink-light text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  let view;
  if (selectedChapterId) {
    view = <ReaderView />;
  } else if (selectedScriptId) {
    view = <OutlinerView />;
  } else {
    view = <TopicsView />;
  }

  return <div className="min-h-dvh bg-cream">{view}</div>;
}
