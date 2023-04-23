import React from "react";
import ReactDOM from "react/client";


export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1> React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search..."
                            type="search"
                            name="q"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}