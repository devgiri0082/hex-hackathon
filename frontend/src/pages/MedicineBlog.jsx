import React from "react";

function MedicineBlog({medicine}) {
  if(!medicine) {
    return <div></div>
  }
    return (
        <section className="">
            <div className="max-w-[1050px]">
                <article className="mb-4">
                    <h1 className="font-medium text-lg">Description</h1>
                    <p>
                        {medicine.description}
                    </p>
                </article>
                <br/>
                <hr/>
                <br/>
                <article>
                    <h1 className="font-medium text-lg">Side Effect</h1>
                    <section>
                        <ul className="my-2">
                          {medicine.side_effects.map((effect) =>  <li className="list-disc list-inside">{effect},</li>)}
                        </ul>
                    </section>
                </article>
            </div>
        </section>
    );
}

export default MedicineBlog;
