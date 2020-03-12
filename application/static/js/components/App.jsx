import React, { Component } from 'react'
import styles from '../../scss/components/app.module'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.scss}>My React App</h1>
            </div>
        )
    }
}
