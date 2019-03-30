import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const SRC = join(__dirname, '..', 'src');

function readCSS(filename: string): string {
  return readFileSync(join(SRC, filename), 'utf-8');
}

// ─── File existence ───

describe('CSS files exist', () => {
  const files = [
    'grid.css', 'reset.css', 'typography.css',
    'utilities.css', 'buttons.css', 'forms.css',
    'cards.css', 'navbar.css',
  ];

  for (const file of files) {
    it(`${file} exists`, () => {
      expect(existsSync(join(SRC, file))).toBe(true);
    });
  }
});

// ─── grid.css ───

describe('grid.css', () => {
  const css = readCSS('grid.css');

  it('defines .container class', () => {
    expect(css).toContain('.container');
  });

  it('defines .row class', () => {
    expect(css).toContain('.row');
  });

  it('uses display: flex for .row', () => {
    expect(css).toContain('display: flex');
  });

  it('defines all 12 column classes (.col-1 to .col-12)', () => {
    for (let i = 1; i <= 12; i++) {
      expect(css).toContain(`.col-${i}`);
    }
  });

  it('uses flex-wrap: wrap', () => {
    expect(css).toContain('flex-wrap: wrap');
  });

  it('sets max-width on .container', () => {
    expect(css).toMatch(/max-width\s*:\s*1200px/);
  });

  it('centers container with auto margins', () => {
    expect(css).toContain('margin-left: auto');
    expect(css).toContain('margin-right: auto');
  });

  it('defines .container-fluid', () => {
    expect(css).toContain('.container-fluid');
  });
});

// ─── reset.css ───

describe('reset.css', () => {
  const css = readCSS('reset.css');

  it('applies box-sizing: border-box', () => {
    expect(css).toContain('box-sizing: border-box');
  });

  it('resets margin and padding on body or *', () => {
    expect(css).toMatch(/margin\s*:\s*0/);
    expect(css).toMatch(/padding\s*:\s*0/);
  });

  it('sets a base line-height', () => {
    expect(css).toContain('line-height');
  });
});

// ─── utilities.css ───

describe('utilities.css', () => {
  const css = readCSS('utilities.css');

  it('defines margin utilities .m-0 to .m-5', () => {
    for (let i = 0; i <= 5; i++) {
      expect(css).toContain(`.m-${i}`);
    }
  });

  it('defines padding utilities .p-0 to .p-5', () => {
    for (let i = 0; i <= 5; i++) {
      expect(css).toContain(`.p-${i}`);
    }
  });

  it('defines display utility .d-none', () => {
    expect(css).toContain('.d-none');
  });

  it('defines display utility .d-flex', () => {
    expect(css).toContain('.d-flex');
  });

  it('defines text alignment utilities', () => {
    expect(css).toContain('.text-center');
    expect(css).toContain('.text-left');
    expect(css).toContain('.text-right');
  });
});

// ─── buttons.css ───

describe('buttons.css', () => {
  const css = readCSS('buttons.css');

  it('defines .btn base class', () => {
    expect(css).toContain('.btn');
  });

  it('defines .btn-primary', () => {
    expect(css).toContain('.btn-primary');
  });

  it('defines .btn-secondary', () => {
    expect(css).toContain('.btn-secondary');
  });

  it('defines .btn-danger', () => {
    expect(css).toContain('.btn-danger');
  });

  it('defines cursor: pointer on button', () => {
    expect(css).toContain('cursor: pointer');
  });
});

// ─── typography.css ───

describe('typography.css', () => {
  const css = readCSS('typography.css');

  it('defines heading styles h1-h4', () => {
    expect(css).toContain('h1');
    expect(css).toContain('h2');
    expect(css).toContain('h3');
    expect(css).toContain('h4');
  });

  it('defines .text-primary color', () => {
    expect(css).toContain('.text-primary');
  });

  it('defines .font-bold font weight', () => {
    expect(css).toContain('.font-bold');
  });
});

// ─── forms.css ───

describe('forms.css', () => {
  const css = readCSS('forms.css');

  it('defines .form-group class', () => {
    expect(css).toContain('.form-group');
  });

  it('defines .form-control class', () => {
    expect(css).toContain('.form-control');
  });

  it('sets width: 100% on form controls', () => {
    expect(css).toContain('width: 100%');
  });
});
