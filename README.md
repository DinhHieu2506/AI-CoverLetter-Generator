Challenge: AI Cover Letter Generator
Build a web application that allows users to generate personalized cover letters using an AI API. Users provide basic job application details, and the app returns a well-formatted, editable, and downloadable cover letter.

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
• Practice AI integration in a content-based real-world use case
• Improve understanding of async API communication
• Enhance user experience through editable AI content
• Practice downloading/exporting documents in web apps
• Build a job-focused, practical AI tool
