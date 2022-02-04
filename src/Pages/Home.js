
import "./home.css"
import me from "../images/new16.png"
const Home = () => {
    return (

        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Welcome your next challenge</h2>
                    <h1 className="i-name">100DaysOfCode</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Learning to code</div>
                            <div className="i-title-item">Choose language</div>
                            <div className="i-title-item">Bite-size exercises</div>
                            <div className="i-title-item">Code Playground</div>
                            <div className="i-title-item">100 Days of challenge</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        “This way, you can work learning to code into your daily routine, whenever you have a few minutes of downtime.”
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" class="i-img"></img>
                <div className="buttons">
                    <div className="item">
                        <a href="./register" style={{ textDecoration: 'none' }}><button className="btn-in">Sign up</button></a>
                    </div>
                    <div className="item">
                        <a href="./login" style={{ textDecoration: 'none' }}> <button className="btn-up">Log in</button></a>
                    </div>


                </div>
            </div>


        </div>

    );
}

export default Home;