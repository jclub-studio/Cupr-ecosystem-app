import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import IntegrationContent from '@/components/IntegrationContent';
import OperationalIntegrationContent from '@/components/OperationalIntegrationContent';
import {
  CHANNEL_INTEGRATIONS,
  CHANNEL_INTEGRATIONS_INTRO,
  OPERATIONAL_INTEGRATIONS,
  OPERATIONAL_INTEGRATIONS_INTRO,
} from '@/content/integrations';

describe('IntegrationContent (Channel Integrations)', () => {
  it('renders the channel intro subhead and section label', () => {
    render(<IntegrationContent />);
    expect(screen.getByText(CHANNEL_INTEGRATIONS_INTRO.subhead)).toBeInTheDocument();
    expect(screen.getByText(CHANNEL_INTEGRATIONS_INTRO.sectionLabel)).toBeInTheDocument();
  });

  it('renders every channel platform card name from the content module', () => {
    render(<IntegrationContent />);
    for (const platform of CHANNEL_INTEGRATIONS) {
      expect(screen.getByRole('heading', { name: platform.name })).toBeInTheDocument();
    }
  });

  it('renders the closing statement', () => {
    render(<IntegrationContent />);
    expect(screen.getByText(CHANNEL_INTEGRATIONS_INTRO.closing)).toBeInTheDocument();
  });
});

describe('OperationalIntegrationContent', () => {
  it('renders the operational subhead and section label', () => {
    render(<OperationalIntegrationContent />);
    expect(screen.getByText(OPERATIONAL_INTEGRATIONS_INTRO.subhead)).toBeInTheDocument();
    expect(screen.getByText(OPERATIONAL_INTEGRATIONS_INTRO.sectionLabel)).toBeInTheDocument();
  });

  it('renders all four operational partner cards (Meadow, Nabis, Canix, Flower Co.)', () => {
    render(<OperationalIntegrationContent />);
    for (const platform of OPERATIONAL_INTEGRATIONS) {
      expect(screen.getByRole('heading', { name: platform.name })).toBeInTheDocument();
    }
  });
});
