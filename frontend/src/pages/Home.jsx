import { useState, useEffect } from "react";
import PersonalInfo from "../components/PersonalInfo";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ResumePreview from "../components/ResumePreview.jsx";
import ATSScore from "../components/ATSScore";
import api from "../services/api";

function Home() {
    const [score, setScore] = useState(0);

    const checkATS = async () => {
        try {
            const { data } = await api.post(
                "/resume/ats",
                resumeData
            );

            setScore(data.score);
        } catch (err) {
            console.log(err);
        }
    };

    const downloadResume = async () => {
        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify(
                        resumeData
                    )
                }
            );

            const blob =
                await response.blob();

            const url =
                window.URL.createObjectURL(
                    blob
                );

            const a =
                document.createElement("a");

            a.href = url;

            a.download = "resume.pdf";

            a.click();

        } catch (error) {
            console.log(error);
        }
    };

    const [resumeData, setResumeData] = useState(() => {
        const saved = localStorage.getItem("resumeData");

        return saved
            ? JSON.parse(saved)
            : {
                name: "",
                email: "",
                phone: "",
                education: [],
                experience: [],
                skills: []
            };
    });

    useEffect(() => {
        localStorage.setItem(
            "resumeData",
            JSON.stringify(resumeData)
        );
    }, [resumeData]);

    const clearResume = () => {
        localStorage.removeItem("resumeData");

        setResumeData({
            name: "",
            email: "",
            phone: "",
            education: [],
            experience: [],
            skills: []
        });

        setScore(0);
    };

    return (
        <div className="text-center mb-10">

            <h1 className="text-6xl font-black">
                Resume Builder Pro
            </h1>

            <p className="text-slate-400 mt-3">
                Build ATS Friendly Resumes
                in Minutes
            </p>

            <div className="grid lg:grid-cols-2 gap-8">

                <div className="space-y-6">

                    <PersonalInfo
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                    />

                    <EducationSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                    />

                    <ExperienceSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                    />

                    <SkillsSection
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                    />

                    <div className="flex gap-4">
                        <button
                            onClick={checkATS}
                            className="bg-green-600 px-5 py-3 rounded-xl"
                        >
                            Check ATS Score
                        </button>

                        <button
                            onClick={downloadResume}
                            className="bg-indigo-600 px-5 py-3 rounded-xl"
                        >
                            Download PDF
                        </button>
                    </div>

                    <ATSScore score={score} />
                </div>

                <ResumePreview
                    resumeData={resumeData}
                />
                <button
                    onClick={clearResume}
                    className="bg-red-600 px-5 py-3 rounded-xl"
                >
                    Clear Resume
                </button>

            </div>
        </div >
    );
}

export default Home;