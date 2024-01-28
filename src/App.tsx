import qrCode from "./assets/image-qr-code.png"
function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen min-[375px]:p-8 min-[1440px]:p-1">
        <div className="
        shadow-lg 
        flex items-center flex-col 
        gap-4 
        min-[1440px]:gap-8 
        min-[375px]:p-4 
        min-[768px]:p-4 
        min-[1440px]:p-6 
        min-[1440px]:w-[20%] 
        min-[768px]:w-[40%]
        bg-[#ffffff] 
        rounded-2xl">
          <img src={qrCode} alt="Imagem de um qrCode" className="rounded-2xl" />

          <div className="flex flex-col text-center gap-3">
            <h2 className="font-bold text-[#203051] min-[768px]:text-[1.6em] min-[1440px]:text-[2.2em] text-[1.7em]">Improve your front-end skills by building projects</h2>
            <p className="text-[#b3b7c9] text-[1.3em] mb-3 min-[768px]:text-[1.2em] min-[1440px]:text-[1.6em]">Scan the QR code to visit
              Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
