import React from 'react'

export default function Project(props) {
    return (
        <div className='section-center'>
            {
                
                props.allProjects.map((projects)=>
                {
                    return <article key={projects.id} className='menu-item'>
                    <img src={projects.img} alt={projects.title} className='photo' />
                    <div className='item-info'>
                      <header>
                        <h4>{projects.title}</h4>
                        <h4 className='price'>${projects.price}</h4>
                      </header>
                      <p className='item-text'>{projects.desc}</p>
                    </div>
                  </article>
                })

            }
        </div>
    )
}
