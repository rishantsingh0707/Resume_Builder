function ATSScore({ score }) {
    return (
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">
                ATS Score
            </h2>

            <div className="flex items-center gap-4">

                <div className="w-24 h-24 rounded-full border-4 border-indigo-500 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                        {score}
                    </span>
                </div>

                <div>
                    {score >= 80 && (
                        <p className="text-green-400">
                            Excellent Resume
                        </p>
                    )}

                    {score >= 60 && score < 80 && (
                        <p className="text-yellow-400">
                            Good Resume
                        </p>
                    )}

                    {score < 60 && (
                        <p className="text-red-400">
                            Needs Improvement
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}

export default ATSScore;