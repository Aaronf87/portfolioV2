 function Projects (props) {
    return (
        
        <div className="flex bg-black background text-white p-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h1>

            <a className = "hover:bg-sky-700 card" href=
            {props.url}>
                <div>
                    <div>
                        <dt className="text-3xl ">{props.name}</dt>
                        <img className="rounded"
                src= {props.image}
                alt= {props.altname}
                width="384"
                height="512"
            />
                      
                    </div>
                </div>
            </a>

        </div>
    )
}

export default Projects