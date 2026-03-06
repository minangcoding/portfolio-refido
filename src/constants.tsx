import { Github, Linkedin, Mail, Twitter, Database, Brain, Code2, BarChart3, Terminal, Cpu } from 'lucide-react';

export const PROFILE = {
  name: 'Refido Arjunal Akmal',
  role: 'Data Scientist & Data Analyst',
  bio: 'Transforming complex data into actionable insights. Specialized in predictive modeling, deep learning, and scalable software architecture.',
  email: 'akmal.arjunal.refido1504@gmail.com',
  location: 'Jakarta, Indonesia',
  availability: 'Open for Opportunities',
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/minangcoding', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/refido-arjunal-akmal/', icon: Linkedin },
  { name: 'Email', url: `mailto:akmal.arjunal.refido1504@gmail.com`, icon: Mail },
];

export const NAV_ITEMS = [
  { name: 'Overview', href: '#hero' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
];

export const SKILLS_DATA = [
  { name: 'Python', level: 95, category: 'Language' },
  { name: 'SQL', level: 90, category: 'Language' },
  { name: 'Scikit-learn', level: 85, category: 'ML/AI' },
  { name: 'Power BI / Tableau', level: 80, category: 'Dashboard Analyst' },
  { name: 'React / JavaScript', level: 75, category: 'Frontend' },
  { name: 'AWS / GCP', level: 70, category: 'Cloud' },
];

export const SERVICES = [
  {
    title: 'Machine Learning',
    icon: Brain,
    description: 'Building predictive models and neural networks to solve complex business problems.',
  },
  {
    title: 'Data Analyst',
    icon: BarChart3,
    description: 'Transforming historical data into actionable insights through visualization and trend analysis.',
  },
  {
    title: 'Data Scientist',
    icon: Database, // Ganti icon kalau bisa supaya beda
    description: 'Developing predictive models and machine learning algorithms to solve complex future challenges.',
  },
  {
    title: 'Software Engineering',
    icon: Code2,
    description: 'Developing robust, scalable applications and deploying ML models to production.',
  },
  {
    title: 'Data Engineering',
    icon: Database,
    description: 'Designing efficient ETL pipelines and managing large-scale data infrastructure.',
  },
];

export const EXPERIENCE = [
  {
    company: 'PT. Solusi Teknologi Indonesia',
    role: 'Software Engineer',
    period: 'Feb 2026 - Present',
    description: 
      'Designing and maintaining high-performance web applications using React.js and Python. ' +
      'Focusing on building scalable system architectures, optimizing database performance, ' +
      'and ensuring seamless integration between front-end interfaces and back-end services.',
    tech: ['Python', 'React.js', 'PostgreSQL', 'System Design'],
  },
  {
    company: 'PT. Astra Credit Companies',
    role: 'Team Leader',
    period: 'Jan 2025 - Feb 2026',
    description: 
      'Led and coordinated a team of 15 subordinates across Indonesia to manage nationwide application progress. ' +
      'Developed a recommendation engine that increased user retention by 15% and implemented automated retraining pipelines using Airflow to ensure system scalability.',
    tech: ['Python','Project Management','Leadership','Team Work','Critical Thinking','Excel','Problem Solving'],
  },
  {
    company: 'PT. ID/X Partners',
    role: 'Data Scientist & Data Analyst',
    period: 'Oct 2024 - Jan 2025',
    description: 
      'Developed a robust Credit Risk Prediction model using Logistic Regression and Random Forest algorithms, analyzing 4.6M+ rows of loan data. ' +
      'Engineered fraud detection systems for 1M+ daily transactions with 99.9% uptime and successfully optimized model inference time by 40%.',
    tech: ['Python', 'Scikit-Learn', 'TensorFlow', 'FastAPI', 'Docker', 'SQL'],
  },
  {
    company: 'PT. Karpa Imaji Labs',
    role: 'Front End Developer',
    period: 'Jul 2024 - Nov 2024',
    description: 
      'Built responsive web interfaces using React.js with a focus on user-centric design. ' +
      'Streamlined data flow through REST API integration to enhance real-time display, ' +
      'and collaborated on system flow architecture to support effective decision-making processes.',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
  },
];

export const EDUCATION = [
  {
    school: 'University Ary Ginanjar',
    degree: 'Bachelor of Computer Science',
    period: '2020 - 2024',
    description: 'Major in Artificial Intelligence and Data Science. Graduated with Cum Laude honors.',
  },
  {
    Bootcamp: 'Dibimbing',
    degree: 'Data Analyst & Data Scientist',
    period: '2025',
    description: 'Comprehensive curriculum covering Data Analyst, Data Scientist, SQL, ETL, EDA, Machine Learning.',
  }
];

export const CERTIFICATES = [
  {
    name: 'Belajar Dasar Data Science',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Comprehensive introduction to the data science lifecycle, covering data gathering, cleaning, and exploratory data analysis (EDA) using Python and statistical methods.',
    link: 'https://www.dicoding.com/certificates/NVP748YGGPR0',
  },
  {
    name: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Mastered the principles of effective data storytelling and visualization techniques to transform complex datasets into clear, actionable business insights.',
    link: 'https://www.dicoding.com/certificates/EYX40KYNJPDL',
  },
  {
    name: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Demonstrated proficiency in managing relational databases, performing data retrieval, filtering, and complex joins to support data-driven analysis.',
    link: 'https://www.dicoding.com/certificates/98XW5VWWWPM3',
  },
  {
    name: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Introduction to project management life cycles, initiating projects, planning, and executing tasks using professional methodologies.',
    link: 'https://www.dicoding.com/certificates/1OP841YD1ZQK',
  },
  {
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Understanding the fundamentals of Artificial Intelligence, including Machine Learning, Deep Learning, and the ethical implications of AI development.',
    link: 'https://www.dicoding.com/certificates/GRX542NN3P0M',
  },
  {
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Building and deploying functional back-end applications using Node.js and managing cloud resources on Google Cloud Platform (GCP).',
    link: 'https://www.dicoding.com/certificates/JMZV1O71JXN9',
  },
  {
    name: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    description: 'Mastering JavaScript for server-side development, covering asynchronous programming, building RESTful APIs, and web server management.',
    link: 'https://www.dicoding.com/certificates/1OP81R3NLZQK',
  }
];

export const PROJECTS = [
  {
    title: 'Bike Sharing Analysis',
    category: 'Data Analyst, Visualization',
    description: 'An interactive dashboard developed to analyze bike rental patterns, identifying key trends based on weather conditions, seasonal impacts, and peak usage hours to optimize fleet distribution.',
    metrics: ['Interactive Dashboard', 'Trend Analysis'],
    tech: ['Python', 'Pandas', 'Seaborn', 'Streamlit', 'Scikit-learn'],
    link: 'https://bike-sharing-analysis-d55x8u8fwezjawptsrembt.streamlit.app/',
    image: 'https://miro.medium.com/v2/resize:fit:883/1*buUmFLcmmgDfm4kk6KAuQA.png',
  },
  {
    title: 'Customer Churn Dashboard',
    category: 'Data Analysis & Prediction',
    description: 'Developed an end-to-end analytical dashboard to identify high-risk customer segments and behavior patterns. ' +
                 'The project includes exploratory data analysis and a predictive model to provide actionable insights for reducing customer attrition.',
    metrics: ['85% Prediction Accuracy', 'Identification of Key Churn Drivers'],
    tech: ['Python', 'Scikit-Learn', 'SQL', 'Pandas', 'Matplotlib', 'Random Forest'],
    link: 'https://drive.google.com/file/d/1AtKQF2MLPK0iClwu1VkhiTBf0F8bi9XP/view?usp=sharing',
    image: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/fc3a04485c66b47e6985c5bd5f0c4b28495a3456',
  },
  {
    title: 'Penguins Data Analysis',
    category: 'Data Science & Analytics',
    description: 'A comprehensive study of the Palmer Penguins dataset, featuring exploratory data analysis (EDA) and machine learning models to classify penguin species based on culmen measurements and flipper length.',
    metrics: ['98% Classification Accuracy', 'Detailed Morphological Insights'],
    tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-Learn', 'Streamlit'],
    link: 'https://ygxgsoihxykbimpvinjdce.streamlit.app/',
    image: 'https://hanfela.com/wp-content/uploads/2023/07/Penguin.jpg',
  },
  {
    title: 'Perdagangan Data Analysis',
    category: 'Data Science & Analytics',
    description: 'A comprehensive study of the Palmer Penguins dataset, featuring exploratory data analysis (EDA) and machine learning models to classify penguin species based on culmen measurements and flipper length.',
    metrics: ['98% Classification Accuracy', 'Detailed Morphological Insights'],
    tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-Learn', 'Streamlit'],
    link: 'https://ygxgsoihxykbimpvinjdce.streamlit.app/',
    image: 'https://tse1.mm.bing.net/th/id/OIP.0ydL-7TOG4UrklvFW0Lc3QHaEK?pid=Api&P=0&h=180',
  },
  {
    title: 'Spotify Hit Predictor Dashboard',
    category: 'Data Science & Analytics',
    description: 'An end-to-end data product analyzing 89,000+ tracks. This project features deep-dive EDA into music genres and a Decision Tree Machine Learning model to predict a song’s commercial success based on its acoustic features.',
    metrics: ['89,740 Unique Tracks Analyzed', 'Interactive Real-time Prediction'],
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Seaborn'],
    link: 'https://dashboard-analysis-spotify-ct5buuaudjvdkpr3wst3qf.streamlit.app/',
    image: 'https://static.wixstatic.com/media/2f9836_1b554a8029a4418195f30b72fb7b3984~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2f9836_1b554a8029a4418195f30b72fb7b3984~mv2.png', // Foto keren bertema audio/Spotify
  },
  {
    title: 'Website Analis Dashboard',
    category: 'Software Development',
    description: 'An end-to-end data product analyzing 89,000+ tracks. This project features deep-dive EDA into music genres and a Decision Tree Machine Learning model to predict a song’s commercial success based on its acoustic features.',
    metrics: ['Interactive Real-time Prediction'],
    tech: ['React Js', 'Vite', 'Vercel'],
    link: 'https://website-analysis-1q36-phi.vercel.app/',
    image: 'https://tse4.mm.bing.net/th/id/OIP.qKo_P3VQ3vKD3cKvzAWPtAHaEK?pid=Api&P=0&h=180', // Foto keren bertema audio/Spotify
  },
];
