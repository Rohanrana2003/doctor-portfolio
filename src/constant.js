import {
  Heart,
  Activity,
  Stethoscope,
  Shield,
  HeartPulse,
  Syringe,
  Scale,
  Biohazard,
  BrainCircuit,
  FlaskConical,
  Radiation,
  User,
  ScanFace,
  Crosshair,
  Thermometer,
  Bone,
  ScanLine,
  Droplets,
  Pill,
  Footprints,
  Salad,
  Video,
  Bed,
} from "lucide-react";

export const doctors = [
  {
    id: 1,
    name: "Dr. Divanshee Sharma",
    specialty: "Consulant physican and Diabetologist",
    experience: "7+ Years",
    location: "Mohali, Punjab",
    rating: "4.9",
    patients: "1500+",
    image: "/assets/doctor-pic1.png",
    description:
      "Dr. Divanshee Sharma, MD, AIIMS Fellow in Diabetes & Metabolism, passionate about holistic care.",
  },
  {
    id: 2,
    name: "Dr. Sachin Madaan",
    specialty: "Endovascular Surgeon and Radiologist",
    experience: "9+ Years",
    location: "Mohali, Punjab",
    rating: "4.8",
    patients: "2000+",
    image: "/assets/doctor-pic2.jpg",
    description:
      "Dedicated consultant and radiologist providing accurate, timely imaging interpretations to support precise diagnosis and effective treatment plans.",
  },
];

export const doctorMeenakshiData = {
  about: {
    name: "Dr. Divanshee Sharma",
    specialty: "Consulant physican and Diabetologist ",
    image: "/assets/doctor-pic1.png",
    titles: [
      "Diabetes specialist",
      "Metabolic disorders",
      "MD Medicine",
      "AIIMS Fellow",
    ],
    experience: "7+ Years",
    patients: "1500+",
    rating: "4.9",
    location: "Mohali Punjab",
    phone: "+91 7302204937",
    email: "sujeevaclinic@gmail.com",
    about:
      "Dr. Divanshee Sharma is an MBBM, MD, and AIIMS Fellow in Diabetes and Metabolism, dedicated to providing comprehensive, patient-focused care for managing diabetes, metabolic disorders, and chronic lifestyle diseases.",
    education: [
      {
        degree: "MD - Doctor of Medicine",
        institution: "Adesh Medical College",
        year: "2013",
      },
      {
        degree: "Assistant Professor",
        institution: "Dept of General Medicine",
        year: "2016",
      },
      {
        degree: "Fellowship in DIABETES and METABOLISM ",
        institution: "AIIMS",
        year: "2019",
      },
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Fellow of American College of Cardiology",
    ],
    specializations: [
      "HYPERTENSION",
      "DIABETES",
      "THYROID DISORDERS",
      "OBESITY",
      "PCOD",
      "CHEST INFECTION",
    ],
    achievements: [
      "Top Doctor Award - New York Magazine (2023)",
      "Excellence in Patient Care - Hospital Recognition (2022)",
      "Published 25+ research papers in peer-reviewed journals",
      "Speaker at International Cardiology Conference (2023)",
    ],
  },
  services: [
    {
      id: 1,
      name: "IN HOUSE PHARMACY",
      description: "Access to essential medicines within the clinic premises.",
      icon: Pill,
      color: "purple",
    },
    {
      id: 2,
      name: "IN HOUSE LAB FACILITY",
      description:
        "On-site laboratory for quick and accurate diagnostic tests.",
      icon: FlaskConical,
      color: "blue",
    },
    {
      id: 3,
      name: "IN HOUSE ECG FACILITY",
      description:
        "Immediate heart monitoring using electrocardiogram services.",
      icon: HeartPulse,
      color: "red",
    },
    {
      id: 4,
      name: "IN HOUSE DIABETIC LAB",
      description: "Specialized lab for diabetic profile tests and monitoring.",
      icon: Syringe,
      color: "orange",
    },
    {
      id: 5,
      name: "DIABETIC NEUROPATHY ASSESSMENT",
      description: "Screening for nerve damage caused by prolonged diabetes.",
      icon: BrainCircuit,
      color: "teal",
    },
    {
      id: 6,
      name: "DIABETIC FOOT CARE",
      description:
        "Comprehensive care to prevent and treat foot complications in diabetes.",
      icon: Footprints,
      color: "green",
    },
    {
      id: 7,
      name: "ULTRASOUND FACILITY",
      description: "Non-invasive imaging for internal organs and diagnostics.",
      icon: ScanLine,
      color: "yellow",
    },
    {
      id: 8,
      name: "IN HOUSE DIETICIAN",
      description:
        "Personalized dietary consultation for better health and disease management.",
      icon: Salad,
      color: "lime",
    },
    {
      id: 9,
      name: "ONLINE CONSULTATION",
      description:
        "Virtual appointments with doctors from the comfort of your home.",
      icon: Video,
      color: "cyan",
    },
    {
      id: 10,
      name: "DAY CARE FACILITY",
      description:
        "Short-term medical care without requiring overnight admission.",
      icon: Bed,
      color: "pink",
    },
  ],
};

export const doctorSachinData = {
  about: {
    name: "Dr. Sachin Madaan",
    specialty: "Endovascular Surgeon and Radiologist",
    image: "/assets/doctor-pic2.jpg",
    titles: [
      "Consultant",
      "Endovascular Surgeon",
      "Interventional Radiologist",
    ],
    experience: "4.8+ Years",
    patients: "2000+",
    rating: "4.9",
    location: "Mohali Punjab",
    phone: "+91 7302204937",
    email: "sujeevaclinic@gmail.com",
    about:
      "Dr. Sachin Madaan is a consultant endovascular surgeon and interventional radiologist with expertise in image-guided, minimally invasive treatments for vascular disorders, tumors, and organ-related conditions.",
    education: [
      {
        degree: "MBBS",
        institution: "Saurashtra University",
        year: "2012",
      },
      {
        degree: "Residency in Internal Medicine",
        institution: "AIIMS Hospital",
        year: "2016",
      },
      {
        degree: "Fellowship in Cardiology",
        institution: "AIIMS Hospital",
        year: "2018",
      },
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Fellow of American College of Cardiology",
    ],
    specializations: [
      "Endovascular Surgery",
      "Interventional Radiology",
      "Minimally Invasive Procedures",
      "Pain Management Interventions",
      "Vascular Interventions",
      "Oncology Interventions",
    ],
    achievements: [
      "Top Doctor Award - New York Magazine (2023)",
      "Excellence in Patient Care - Hospital Recognition (2022)",
      "Published 25+ research papers in peer-reviewed journals",
      "Speaker at International Cardiology Conference (2023)",
    ],
  },
  services: [
    {
      id: 1,
      name: "IN HOUSE PHARMACY",
      description: "Access to essential medicines within the clinic premises.",
      icon: Pill,
      color: "purple",
    },
    {
      id: 2,
      name: "IN HOUSE LAB FACILITY",
      description:
        "On-site laboratory for quick and accurate diagnostic tests.",
      icon: FlaskConical,
      color: "blue",
    },
    {
      id: 3,
      name: "IN HOUSE ECG FACILITY",
      description:
        "Immediate heart monitoring using electrocardiogram services.",
      icon: HeartPulse,
      color: "red",
    },
    {
      id: 4,
      name: "IN HOUSE DIABETIC LAB",
      description: "Specialized lab for diabetic profile tests and monitoring.",
      icon: Syringe,
      color: "orange",
    },
    {
      id: 5,
      name: "DIABETIC NEUROPATHY ASSESSMENT",
      description: "Screening for nerve damage caused by prolonged diabetes.",
      icon: BrainCircuit,
      color: "teal",
    },
    {
      id: 6,
      name: "DIABETIC FOOT CARE",
      description:
        "Comprehensive care to prevent and treat foot complications in diabetes.",
      icon: Footprints,
      color: "green",
    },
    {
      id: 7,
      name: "ULTRASOUND FACILITY",
      description: "Non-invasive imaging for internal organs and diagnostics.",
      icon: ScanLine,
      color: "yellow",
    },
    {
      id: 8,
      name: "IN HOUSE DIETICIAN",
      description:
        "Personalized dietary consultation for better health and disease management.",
      icon: Salad,
      color: "lime",
    },
    {
      id: 9,
      name: "ONLINE CONSULTATION",
      description:
        "Virtual appointments with doctors from the comfort of your home.",
      icon: Video,
      color: "cyan",
    },
    {
      id: 10,
      name: "DAY CARE FACILITY",
      description:
        "Short-term medical care without requiring overnight admission.",
      icon: Bed,
      color: "pink",
    },
  ],
};
