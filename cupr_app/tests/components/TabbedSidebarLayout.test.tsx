import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabbedSidebarLayout, type SidebarTab } from '@/components/TabbedSidebarLayout';

const TABS: ReadonlyArray<SidebarTab> = [
  { id: 'first', title: 'First' },
  { id: 'second', title: 'Second' },
  { id: 'third', title: 'Third' },
];

function renderLayout() {
  return render(
    <TabbedSidebarLayout
      eyebrow="Test"
      tabs={TABS}
      renderContent={tabId => <div data-testid="body">{tabId}</div>}
    />,
  );
}

describe('TabbedSidebarLayout', () => {
  it('renders a tablist with each tab as a tab', () => {
    renderLayout();
    const tablist = screen.getByRole('tablist', { name: 'Test' });
    expect(tablist).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(TABS.length);
  });

  it('selects the first tab by default and exposes it via aria-selected', () => {
    renderLayout();
    const first = screen.getByRole('tab', { name: 'First' });
    const second = screen.getByRole('tab', { name: 'Second' });
    expect(first).toHaveAttribute('aria-selected', 'true');
    expect(second).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByTestId('body')).toHaveTextContent('first');
  });

  it('switches tabs on click and updates the rendered body', async () => {
    const user = userEvent.setup();
    renderLayout();
    await user.click(screen.getByRole('tab', { name: 'Second' }));
    expect(screen.getByRole('tab', { name: 'Second' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('body')).toHaveTextContent('second');
  });

  it('supports arrow-key navigation between tabs (roving tabindex)', async () => {
    const user = userEvent.setup();
    renderLayout();
    const first = screen.getByRole('tab', { name: 'First' });
    first.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('tab', { name: 'Second' })).toHaveAttribute('aria-selected', 'true');
    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Third' })).toHaveAttribute('aria-selected', 'true');
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'First' })).toHaveAttribute('aria-selected', 'true');
  });

  it('wires aria-controls / aria-labelledby between tab and panel', () => {
    renderLayout();
    const tab = screen.getByRole('tab', { name: 'First' });
    const panel = screen.getByRole('tabpanel');
    expect(tab.getAttribute('aria-controls')).toBe(panel.getAttribute('id'));
    expect(panel.getAttribute('aria-labelledby')).toBe(tab.getAttribute('id'));
  });
});
