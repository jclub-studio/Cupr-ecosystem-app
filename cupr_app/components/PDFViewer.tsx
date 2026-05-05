'use client';

import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  fileUrl: string;
  title?: string;
}

export default function PDFViewer({ fileUrl, title = 'Document' }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onLoadError = useCallback((err: Error) => {
    const base = 'Failed to load PDF. Please try again.';
    setError(
      process.env.NODE_ENV === 'development' ? `${base} (${err.message})` : base,
    );
    setIsLoading(false);
    console.error(err);
  }, []);

  return (
    <div className="pdf-viewer-wrapper">
      <div className="pdf-toolbar">
        <span className="pdf-title">{title}</span>
        <div className="pdf-controls">
          <button
            disabled={numPages < 1 || pageNumber <= 1}
            onClick={() => setPageNumber((p) => p - 1)}
            aria-label="Previous page"
          >
            ‹ Prev
          </button>
          <span className="pdf-page-info">
            {numPages > 0 ? `Page ${pageNumber} of ${numPages}` : '—'}
          </span>
          <button
            disabled={numPages < 1 || pageNumber >= numPages}
            onClick={() => setPageNumber((p) => p + 1)}
            aria-label="Next page"
          >
            Next ›
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="pdf-loading">Loading document…</div>
      )}

      {error && (
        <div className="pdf-error">{error}</div>
      )}

      <div className="pdf-canvas-wrapper">
        <Document
          file={fileUrl}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onLoadError}
          loading=""
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={Math.min(typeof window !== 'undefined' ? window.innerWidth * 0.85 : 800, 900)}
          />
        </Document>
      </div>

      <style jsx>{`
        .pdf-viewer-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background: #1c1b19;
          border-radius: 0.75rem;
          padding: 1.5rem;
          gap: 1rem;
        }
        .pdf-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 900px;
          background: #201f1d;
          border: 1px solid #393836;
          border-radius: 0.5rem;
          padding: 0.75rem 1.25rem;
        }
        .pdf-title {
          font-size: 0.875rem;
          color: #cdccca;
          font-weight: 500;
        }
        .pdf-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .pdf-controls button {
          background: #01696f;
          color: #f9f8f5;
          border: none;
          border-radius: 0.375rem;
          padding: 0.375rem 0.875rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 180ms ease;
        }
        .pdf-controls button:disabled {
          background: #2d2c2a;
          color: #5a5957;
          cursor: not-allowed;
        }
        .pdf-controls button:not(:disabled):hover {
          background: #0c4e54;
        }
        .pdf-page-info {
          font-size: 0.875rem;
          color: #797876;
          min-width: 100px;
          text-align: center;
        }
        .pdf-loading {
          color: #797876;
          font-size: 0.875rem;
          padding: 2rem;
        }
        .pdf-error {
          color: #d163a7;
          font-size: 0.875rem;
          padding: 1rem;
          background: #4c3d46;
          border-radius: 0.5rem;
        }
        .pdf-canvas-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          overflow-x: auto;
        }
        .pdf-canvas-wrapper canvas {
          border-radius: 0.375rem;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
