export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen bg-black background text-white p-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h1>

            <a href="https://unitybiz-fd2efb602da8.herokuapp.com/">
                <div>
                    <div>
                        <dt className="text-3xl">UnityBiz</dt>
                        <img className="rounded"
                src="/src/assets/unityBiz.png"
                alt="photo of unitybiz site"
                width="384"
                height="512"
            />
                      
                    </div>
                </div>
            </a>

            <a href="https://aaronf87.github.io/Meow-Me/">
                <div>
                    <dt className="text-3xl">Meow Me</dt>
                    <img className="rounded" src="/src/assets/MeowMeDark.png"
                alt="photo of meow me site"
                width="384"
                height="512"
                border-radius="50%"
            />
                </div>
            </a>

            <a href="https://aaronf87.github.io/HorizonFansite/">
                <div>
                    <dt className="text-3xl">Horizon Fan Page</dt>
                    <img className="rounded"  src="/src/assets/HorizonFanPagePhoto.jpg"
                alt=""
                width="384"
                height="512"
                border-radius="50%"
            />
                </div>
            </a>

            <a href="https://aaronf87.github.io/moc/">
                <div>
                    <dt className="text-3xl">Candy Shop</dt>
                    <img className="rounded"  src="/src/assets/moc-image.png"
                alt=""
                width="384"
                height="512"
                border-radius="50%"
            />
                </div>
            </a>

        </div>
    )
}