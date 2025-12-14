# ⚖️ Law Firm Landing Page Template

A modern, responsive landing page template designed for attorneys, law firms, and legal professionals.

Built to present legal services with clarity, credibility, and trust while maintaining a clean, professional user experience.

---

## ✨ Features

- Professional, trust-focused legal UI
- Mobile-first responsive layout
- Sticky navigation with mobile menu
- Clear call-to-action sections (Consultation, Contact)
- Practice area service cards
- Attorney profile / firm overview section
- Contact + consultation form
- Office image gallery
- SCSS architecture using BEM methodology
- Easy content customization per client

---

## 🧱 Tech Stack

- **React**
- **SCSS** (BEM naming convention)
- Functional components
- Local assets (icons + images)

---

## 📁 Folder Structure

```
src/
│
├── Assets/
│   ├── Icons/
│   └── Images/
│
├── Components/
│   ├── Nav/
│   │   ├── Nav.jsx
│   │   └── Nav.scss
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.scss
│
├── Pages/
│   └── Landing/
│       ├── Landing.jsx
│       └── Landing.scss
│
└── index.js
```

---

## 🧩 Main Sections

### 1. Navigation

Sticky top navigation including:

- Firm name
- Practice area links
- Primary CTA (“Request Consultation”)
- Mobile hamburger menu

---

### 2. Hero Section

- Law firm or attorney name
- Primary practice focus
- Strong value proposition
- Primary & secondary call-to-action buttons

---

### 3. Practice Areas

Card-based layout highlighting common legal services such as:

- Personal Injury
- Family Law
- Criminal Defense
- Business Law

Icons and text are fully interchangeable.

---

### 4. Attorney / Firm Overview

Section dedicated to:

- Attorney experience
- Firm values
- Client-focused approach

Designed to establish credibility and trust.

---

### 5. Client Testimonial

Single featured testimonial reinforcing:

- Professionalism
- Results
- Client satisfaction

---

### 6. Contact & Consultation Section

- Office address
- Phone number
- Email
- Consultation request form

All information uses placeholder data and should be replaced per client.

---

### 7. Office Gallery

Simple image grid showcasing:

- Office environment
- Professional setting
- Brand credibility

---

## 🖌 Styling Notes

- Uses **BEM naming convention** for maintainable styling
- Responsive typography using `clamp()`
- SCSS variables for colors, spacing, and typography
- Designed to feel professional, restrained, and authoritative

Example:

```scss
font-size: clamp(1.4rem, 4vw, 2.75rem);
```

---

## 🔁 Reusing This Template for New Clients

1. Update firm name and practice areas in `Landing.jsx`
2. Replace attorney bio and firm description
3. Swap icons and office images in `/Assets`
4. Update contact and consultation information
5. Adjust brand colors and typography in `Landing.scss`

This template is designed for rapid reuse across multiple legal clients.

---

## 🚀 Ideal Use Cases

- Freelance attorney websites
- Law firm landing pages
- Portfolio projects
- SEO-focused legal marketing pages
- Client proof-of-concept designs

---

## 📌 Notes

This project uses placeholder content and imagery.  
All legal content should be reviewed and approved by the client prior to deployment.

---

## 📄 License

This project is licensed under the MIT License.
