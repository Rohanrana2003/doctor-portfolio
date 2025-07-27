import {
  Heart,
  Activity,
  Stethoscope,
  Pill,
  Eye,
  Star,
  CheckCircle,
  Users,
  Calendar,
  BookOpen,
  Shield,
  Zap,
  HeartPulse,
  Syringe,
  Scale,
  Biohazard,
  BrainCircuit,
  FlaskConical,
  Radiation,
  User,
  ScanFace,
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
    specialty: "Radiologist",
    experience: "9+ Years",
    location: "Mohali, Punjab",
    rating: "4.8",
    patients: "2000+",
    image: "/assets/doctor-pic2.jpg",
    description:
      "Dedicated radiologist providing accurate, timely imaging interpretations to support precise diagnosis and effective treatment plans.",
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
        year: "2008",
      },
      {
        degree: "Assistant Professor",
        institution: "Dept of General Medicine",
        year: "2011",
      },
      {
        degree: "Fellowship in DIABETES and METABOLISM ",
        institution: "AIIMS",
        year: "2014",
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
      name: "HYPERTENSION",
      description:
        "Persistent high blood pressure requiring lifestyle and medical management.",
      icon: HeartPulse,
      color: "purple",
    },
    {
      id: 2,
      name: "DIABETES",
      description:
        "Chronic condition affecting blood sugar levels and insulin response.",
      icon: Syringe,
      color: "blue",
    },
    {
      id: 3,
      name: "THYROID DISORDERS",
      description:
        "Imbalances in thyroid hormones causing metabolic and energy issues.",
      icon: Activity,
      color: "green",
    },
    {
      id: 4,
      name: "OBESITY",
      description:
        "Excess body fat increasing risk of multiple chronic health conditions.",
      icon: Scale,
      color: "orange",
    },
    {
      id: 5,
      name: "PCOD",
      description:
        "Hormonal disorder causing irregular periods, weight gain, and infertility.",
      icon: User,
      color: "pink",
    },
    {
      id: 6,
      name: "CHEST INFECTION",
      description:
        "Infection in lungs or airways causing cough, fever, and breathlessness.",
      icon: ScanFace, // closest match
      color: "teal",
    },
    {
      id: 7,
      name: "INFECTIONS",
      description:
        "Dengue, malaria, typhoid – high fever with systemic complications.",
      icon: Biohazard,
      color: "red",
    },
    {
      id: 8,
      name: "NEUROPATHY",
      description:
        "Nerve damage leading to pain, numbness, or tingling sensations.",
      icon: BrainCircuit,
      color: "indigo",
    },
    {
      id: 9,
      name: "GASTRO INFECTION",
      description:
        "Stomach or intestinal infection causing nausea, vomiting, and diarrhea.",
      icon: Radiation, // symbolic replacement
      color: "yellow",
    },
    {
      id: 10,
      name: "LIVER DISEASE",
      description:
        "Disorders affecting liver function, digestion, and metabolic regulation.",
      icon: FlaskConical,
      color: "emerald",
    },
    {
      id: 11,
      name: "NEURO HEART",
      description:
        "Brain-heart link issues causing fainting, palpitations, or fatigue.",
      icon: Heart,
      color: "cyan",
    },
  ],
};

export const doctorSachinData = {
  about: {
    name: "Dr. Sachin Madaan",
    specialty: "Radiologist",
    image: "/assets/doctor-pic2.jpg",
    titles: [
      "Diabetes specialist",
      "Metabolic disorders",
      "MD Medicine",
      "AIIMS Fellow",
    ],
    experience: "4.8+ Years",
    patients: "2000+",
    rating: "4.9",
    location: "Mohali Punjab",
    phone: "+1 (555) 123-4567",
    email: "dr.sarah@hospital.com",
    about:
      "Dr. Devanshi Sharma, a compassionate and patient-focused diabetologist (or endocrinologist), specializes in holistic diabetes care, focusing on minimal medication burden and long-term wellness",
    education: [
      {
        degree: "MD - Doctor of Medicine",
        institution: "Harvard Medical School",
        year: "2008",
      },
      {
        degree: "Residency in Internal Medicine",
        institution: "Johns Hopkins Hospital",
        year: "2011",
      },
      {
        degree: "Fellowship in Cardiology",
        institution: "Mayo Clinic",
        year: "2014",
      },
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
      "Fellow of American College of Cardiology",
    ],
    specializations: [
      "Interventional Cardiology",
      "Heart Failure Management",
      "Preventive Cardiology",
      "Cardiac Catheterization",
      "Echocardiography",
      "Nuclear Cardiology",
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
      name: "Diabetes Management",
      description: "Comprehensive care for type 1 and type 2 diabetes",
      icon: Heart,
      color: "blue",
    },
    {
      id: 2,
      name: "Blood Sugar Monitoring",
      description:
        "Advanced glucose tracking and continuous monitoring solutions",
      icon: Activity,
      color: "green",
    },
    {
      id: 3,
      name: "Insulin Therapy",
      description:
        "Personalized insulin plans and injection technique training",
      icon: Pill,
      color: "purple",
    },
    {
      id: 4,
      name: "Diabetic Eye Care",
      description:
        "Retinal screening and vision protection for diabetic patients",
      icon: Eye,
      color: "orange",
    },
    {
      id: 5,
      name: "Foot Care Management",
      description: "Diabetic foot screening and ulcer prevention strategies",
      icon: Star,
      color: "pink",
    },
    {
      id: 6,
      name: "Nutritional Counseling",
      description: "Customized meal plans and dietary guidance for diabetics",
      icon: CheckCircle,
      color: "teal",
    },
    {
      id: 7,
      name: "Lifestyle Coaching",
      description:
        "Exercise programs and healthy lifestyle modification support",
      icon: Users,
      color: "indigo",
    },
    {
      id: 8,
      name: "Regular Check-ups",
      description: "Scheduled monitoring and preventive care appointments",
      icon: Calendar,
      color: "red",
    },
    {
      id: 9,
      name: "Patient Education",
      description: "Diabetes awareness workshops and self-management training",
      icon: BookOpen,
      color: "yellow",
    },
    {
      id: 10,
      name: "Complication Prevention",
      description: "Early detection and prevention of diabetic complications",
      icon: Shield,
      color: "emerald",
    },
    {
      id: 11,
      name: "HbA1c Testing",
      description: "Advanced blood tests for long-term glucose control",
      icon: Zap,
      color: "violet",
    },
    {
      id: 12,
      name: "Thyroid Management",
      description: "Comprehensive thyroid disorder diagnosis and treatment",
      icon: Stethoscope,
      color: "cyan",
    },
  ],
};
