import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Recursos from '../Recursos';

// Mock the imported JSON and raw text
vi.mock('../../data/assets/sermons.json', () => ({
  default: [
    {
      id: "1",
      title: "Test Sermon",
      series: "Test Series",
      date: "10 de Marzo, 2026",
      speaker: "Test Speaker",
      videoUrl: "https://test.com",
      description: "Test Description",
      tags: ["Test"]
    }
  ]
}));

vi.mock('../../data/assets/resources.json', () => ({
  default: [
    {
      title: "Test Resource",
      type: "PDF",
      size: "1 MB"
    }
  ]
}));

vi.mock('../../data/assets/dummy.txt?raw', () => ({
  default: "Dummy content"
}));

describe('Recursos Component', () => {
  beforeEach(() => {
    // Mock URL.createObjectURL and revokeObjectURL
    global.URL.createObjectURL = vi.fn(() => 'blob:test-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  it('renders sermons and resources', () => {
    render(<Recursos />);
    expect(screen.getByText('Test Sermon')).toBeInTheDocument();
    expect(screen.getByText('Test Resource')).toBeInTheDocument();
  });

  it('triggers download when download button is clicked', () => {
    render(<Recursos />);
    
    // Mock anchor click
    const clickMock = vi.fn();
    const originalCreateElement = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      const el = originalCreateElement(tagName);
      if (tagName === 'a') {
        el.click = clickMock;
      }
      return el;
    });

    const downloadBtn = screen.getByLabelText('Descargar Test Resource');
    fireEvent.click(downloadBtn);

    expect(global.URL.createObjectURL).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(global.URL.revokeObjectURL).toHaveBeenCalled();
    
    // Check if the download attribute was set correctly
    const createElementMock = document.createElement as any;
    const aElement = createElementMock.mock.results.find(
      (r: any) => r.value.tagName === 'A'
    )?.value;
    expect(aElement.download).toBe('test-resource.txt');
  });
});
