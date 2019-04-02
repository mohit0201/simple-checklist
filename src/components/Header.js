import React, {Component} from "react"

class Header extends Component {

    render() {
        let date = new Date()
        let hours = date.getHours()
        let timeOfDay

        const styles = {
            fontSize: 40,
            textAlign: "center",
            color: "whitesmoke"
        }

        if(hours < 12) {
            timeOfDay = "Morning!"
            styles.color = "#61dafb"
        } else if(hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon!"
            styles.color = "gold"
        } else if(hours >= 17 && hours < 20) {
            timeOfDay = "Evening!"
            styles.color = "tomato"
        } else {
            timeOfDay = "Night!"
            styles.color = "darkkhaki"
        }


        return(
            <div className="header">
                <h1 className="header" style={styles}>Good {timeOfDay}</h1>
            </div>
        )
    }
}

export default Header