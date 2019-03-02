> **Archived** — Kept for reference. Not part of the current portfolio.

# CSS Grid Framework

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Size](https://img.shields.io/badge/Size-~8KB-blue.svg)

A minimal, lightweight 12-column CSS grid framework built with Flexbox. No JavaScript. No build tools. No dependencies. Just clean, responsive CSS for rapid prototyping.

## Features

- **12-column flexbox grid** with gutters and offsets
- **4 responsive breakpoints** - sm (576px), md (768px), lg (992px), xl (1200px)
- **Spacing utilities** - margin and padding (m-0 to m-5, p-0 to p-5)
- **Display utilities** - none, block, flex, inline-flex, grid
- **Typography** - heading sizes, font weights, line heights, text colors
- **Buttons** - primary, secondary, success, danger, outline, sizes
- **Forms** - inputs, selects, checkboxes, validation states
- **Cards** - header, body, footer, shadow variant
- **Navbar** - responsive with dark mode and mobile toggle

## Quick Start

Include the CSS files in your HTML:

```html
<link rel="stylesheet" href="src/reset.css">
<link rel="stylesheet" href="src/grid.css">
<link rel="stylesheet" href="src/utilities.css">
<link rel="stylesheet" href="src/typography.css">
<link rel="stylesheet" href="src/buttons.css">
<link rel="stylesheet" href="src/forms.css">
<link rel="stylesheet" href="src/cards.css">
<link rel="stylesheet" href="src/navbar.css">
```

Or include only what you need. Each file is independent (except `reset.css` which should come first).

## Grid System

### Basic columns

```html
<div class="container">
  <div class="row">
    <div class="col-6">Half width</div>
    <div class="col-6">Half width</div>
  </div>
</div>
```

### Three equal columns

```html
<div class="row">
  <div class="col-4">One third</div>
  <div class="col-4">One third</div>
  <div class="col-4">One third</div>
</div>
```

### Responsive columns

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    Full on mobile, half on tablet, third on desktop
  </div>
</div>
```

### Column offsets

```html
<div class="row">
  <div class="col-6 col-offset-3">Centered 6-column block</div>
</div>
```

## Breakpoints

| Breakpoint | Class prefix | Min width |
|------------|-------------|-----------|
| Extra small | `.col-*` | 0 |
| Small | `.col-sm-*` | 576px |
| Medium | `.col-md-*` | 768px |
| Large | `.col-lg-*` | 992px |

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<div class="card card-shadow">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here.</p>
    <a href="#" class="btn btn-primary">Action</a>
  </div>
</div>
```

### Forms

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="you@example.com">
  <span class="form-text">We'll never share your email.</span>
</div>
```

### Navbar

```html
<nav class="navbar navbar-dark">
  <a class="navbar-brand" href="#">Brand</a>
  <ul class="navbar-nav">
    <li><a class="nav-link active" href="#">Home</a></li>
    <li><a class="nav-link" href="#">About</a></li>
  </ul>
</nav>
```

## Browser Support

- Chrome 49+
- Firefox 52+
- Safari 10+
- Edge 16+
- Opera 36+

Flexbox-based layout requires a modern browser. No IE11 support.

## License

MIT
