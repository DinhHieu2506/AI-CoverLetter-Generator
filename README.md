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


# Application Pages (Page Order & Description)
1. Home Page – Input & Result Preview
Includes:
• Form for user input:
  - Full Name
  - Position Applying For
  - Company Name
  - Summary of Experience / Key Skills
  - Preferred Tone (Formal, Friendly, Concise, etc.)
• “Generate Cover Letter” button
After submission:
• Call AI API to generate personalized cover letter text
• Display:
  - Live preview of the cover letter
  - Editable letter area
  - Buttons to:
    - 📥 Download as Word or PDF
    - 🔗 Copy to clipboard
##Technologies Used
• Frontend: ReactJS (with Hooks)
• Styling: TailwindCSS or any modern UI framework
• Data Fetching: Fetch API or Axios
• AI Integration: OpenAI GPT-4 or Gemini API
• Optional Enhancements:
  - React Hook Form (for better form UX)
  - Zustand or Context API (state handling)
  - html-docx-js or jspdf (to export .docx/.pdf)
### Core Requirements
Features
• Accepts user input:
 - Full Name
  - Position Applying For
  - Company Name
  - Short Experience/Skills
  - Tone of the letter
• Sends request to AI API to generate personalized cover letter
• Displays:
  - Live preview of cover letter
  - Editable section for fine-tuning
  - Buttons to:
    - Download Word or PDF
    - Copy content
#### Design Preference
• Clean, professional, resume-like layout optimized for reading
##### Challenge Goals
•	Practice AI integration in a content-based real-world use case
•	Improve understanding of async API communication
•	Enhance user experience through editable AI content
•	Practice downloading/exporting documents in web apps
•	Build a job-focused, practical AI tool
