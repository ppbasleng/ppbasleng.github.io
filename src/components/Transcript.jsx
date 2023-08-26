function Transcript() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-md font-bold mb-5">Transcript</h3>
            {/* svg from src/assets/ponlapat_transcript.svg */}
            <img src="src/assets/ponlapat_transcript.svg" alt="transcript" className="h-full object-contain object-center" />
        </div>
    );
}

export default Transcript;