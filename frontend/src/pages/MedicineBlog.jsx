import React from "react";

function MedicineBlog() {
    return (
        <section className="">
            <div className="max-w-[1050px]">
                <article className="mb-4">
                    <h1 className="font-medium text-lg">Introduction</h1>
                    <p>
                        ㅤㅤㅤㅤㅤSinex is a brand of over-the-counter products that help relieve nasal
                        stuffiness that often accompanies colds, hay fever, or upper respiratory
                        allergies. The Sinex line of products alleviates sinus pressure and shrinks
                        swollen nasal membranes to help you breathe more freely—no matter how stuffy
                        you may be. Sinex provides 12-hour relief of nasal stuffiness and can be
                        used every 10 to 12 hours. Adults and children 6 years of age or older can
                        administer 2 or 3 sprays in each nostril every 10 to 12 hours. You should
                        not exceed two doses of Sinex in a 24-hour period. Children 6 years of age
                        and older may use Sinex (with adult supervision). Children ages 2 to 6 may
                        use Sinex if approved by a doctor. Children 2 years of age or younger should
                        not use Sinex.
                    </p>
                </article>
                <br/>
                <hr/>
                <br/>
                <article>
                    <h1 className="font-medium text-lg">Before taking this medicine</h1>
                    <section>
                        <div>
                            ㅤㅤㅤㅤYou should not use Sinex Nasal Spray if you are allergic to it. Do not
                            use Sinex Nasal Spray if you have used an MAO inhibitor in the past 14
                            days. A dangerous drug interaction could occur. MAO inhibitors include
                            isocarboxazid, linezolid, methylene blue injection, phenelzine,
                            rasagiline, selegiline, tranylcypromine, and others. Ask a doctor or
                            pharmacist if it is safe for you to use this medicine if you have other
                            medical conditions, especially:
                        </div>
                        <ul className="my-2">
                            <li className="list-disc list-inside">heart disease,</li>
                            <li className="list-disc list-inside">heart rhythm disorder,</li>
                            <li className="list-disc list-inside">high blood pressure,</li>
                            <li className="list-disc list-inside">diabetes glaucoma a thyroid disorder,</li>
                            <li className="list-disc list-inside">or an enlarged prostate or urination problems.</li>
                        </ul>
                        <div>
                            It is not known whether Sinex Nasal Spray will harm an unborn baby. Do
                            not use this medicine without a doctor's advice if you are pregnant.
                        </div>
                    </section>
                </article>
            </div>
        </section>
    );
}

export default MedicineBlog;
