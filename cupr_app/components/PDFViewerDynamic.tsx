import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./PDFViewer'), {
  ssr: false,
  loading: () => (
    <div style={{ padding: '2rem', color: '#797876', textAlign: 'center' }}>
      Loading PDF viewer…
    </div>
  ),
});

export default PDFViewer;
