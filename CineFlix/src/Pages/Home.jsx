import data from '../../artigos.json'

function Home() {
    return ( 
        <>      {
        data.map(
            (filme, index) => (
                <div className='card' key={index}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image}/>
                    <div className="tags">
                        {
                            filme.tags.map( tag =>  (
                                <span className="bg-pink-800 text-white p-1 m-1" key={tag}>{tag}</span>
                            ))
                        }
                    </div>
                     <div className="Texto">
                        {
                            filme.text.map(texto => (
                                <p key={texto}> {texto}</p>
                            ))
                        }
                     </div>
                 </div>
                )
            )
        } 
        </>   
     );
}

export default Home;