// src/ai/recommendationService.js

// Mock data; replace with real API integrations (e.g. OpenAI, GPT, Gemini)
const templates = {
    start: {
      recs: [
        'Complete your university admission tasks.',
        'Join orientation workshops.',
        'Connect with a peer mentor.'
      ],
      paths: [
        'IT Support Specialist',
        'Junior Web Developer'
      ],
      resources: [
        'Campus Orientation Guide',
        'Intro to University Success Course'
      ]
    },
    transform: {
      recs: [
        'Participate in interdisciplinary challenges.',
        'Apply for summer internships.',
        'Take advanced coding courses.'
      ],
      paths: [
        'Full-Stack Developer Intern',
        'Data Analyst Trainee'
      ],
      resources: [
        'Real-World Project Challenges',
        'Industry Mentorship Program'
      ]
    },
    excel: {
      recs: [
        'Pursue AWS or Azure certifications.',
        'Contribute to open-source projects.',
        'Attend hackathons.'
      ],
      paths: [
        'Cloud Engineer',
        'DevOps Specialist'
      ],
      resources: [
        'AWS Certified Cloud Practitioner Course',
        'Open-Source Contribution Guide'
      ]
    },
    professionalize: {
      recs: [
        'Specialize in AI/ML or cybersecurity.',
        'Publish technical blog posts.',
        'Lead a small development team.'
      ],
      paths: [
        'Machine Learning Engineer',
        'Security Consultant'
      ],
      resources: [
        'Advanced AI/ML Nanodegree',
        'Cybersecurity Certification Path'
      ]
    },
    success: {
      recs: [
        'Mentor junior students.',
        'Speak at industry conferences.',
        'Drive innovation in projects.'
      ],
      paths: [
        'Technical Lead',
        'CTO'
      ],
      resources: [
        'Leadership Development Program',
        'Innovation Management Workshop'
      ]
    }
  };
  
  export async function getRecommendations(phase) {
    // Simulate API latency
    return new Promise((res) => setTimeout(() => res(templates[phase].recs), 300));
  }
  
  export async function getCareerPaths(phase) {
    return new Promise((res) => setTimeout(() => res(templates[phase].paths), 300));
  }
  
  export async function getResources(phase) {
    return new Promise((res) => setTimeout(() => res(templates[phase].resources), 300));
  }
  
  