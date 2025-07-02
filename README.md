# AI Cover Letter Generator

A web application that allows users to generate personalized cover letters using an AI API. Users provide basic job application details, and the app returns a well-formatted, editable, and downloadable cover letter.

## Features

- **User Input Form:**  
  - Full Name  
  - Email  
  - Phone  
  - Gender  
  - Address  
  - Education  
  - Position Applying For  
  - Company Name  
  - Reason for Applying  
  - Summary of Experience / Key Skills  
  - Preferred Tone (Formal, Friendly, Confident, etc.)

- **AI Integration:**  
  - Calls Gemini API (or OpenAI GPT-4) to generate a personalized cover letter based on user input.

- **Live Preview:**  
  - Displays a live, editable preview of the generated cover letter.

- **Export & Copy:**  
  - Download as Word (.docx) or PDF  
  - Copy content to clipboard  
  - Preview in a new tab

## Technologies Used

- **Frontend:** ReactJS (with Hooks)
- **Styling:** TailwindCSS, Ant Design
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **AI Integration:** Gemini API (Google) or OpenAI GPT-4
- **Export:** `jspdf`, `docx`, `file-saver`
- **Build Tool:** Vite

## How It Works

1. **Fill out the form** with your personal and job application details.
2. **Click "Generate Cover Letter"** to send your data to the AI API.
3. **Edit the generated letter** in the live preview area if needed.
4. **Download** your letter as PDF or Word, or **copy** it to your clipboard.



