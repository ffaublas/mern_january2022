import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllAuthors = () => {
    let [allAuthors, setAllAuthors] = useState([]);
    let [deleted, setDeleted] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/author")
            .then((res) => {
                let items = [...res.data.result];
                console.log(res, items);
                items.sort(function (a, b) {
                    var One = a.Author.toUpperCase();
                    var Two = b.Author.toUpperCase();
                    if (One < Two) {
                        return -1;
                    }
                    if (One > Two) {
                        return 1;
                    }
                    return 0;
                });
                console.log("items-->", items);
                setAllAuthors(items);
                //response.data.results we want to save into state (this represents the array of author objects)
            })
            .catch((err) => {
                console.log("ERROR", err);
            });
    }, [deleted]);

    const deleteAuthor = (authorId) => {
        axios
            .delete(`http://localhost:8000/api/author/delete/${authorId}`)
            .then((res) => {
                console.log("res when deleting->", res);
                setDeleted(!deleted);
            })
            .catch((err) => console.log("ERROR", err));
    };

    return (
        <div>
            <p>We have quotes by: </p>
            {allAuthors.map((favoriteObj, i) => {
                return (
                    <div key={i} style={{ border: "1px solid black" }}>
                        <ul>
                            <li>
                                Author:{" "}
                                <Link to={`/author/${favoriteObj._id}`}>
                                    {favoriteObj.Author}
                                </Link>{" "}
                                | &nbsp;
                                <Link
                                    to={`/author/edit/${favoriteObj._id}`}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </Link>{" "}
                                | &nbsp;
                                <button
                                    onClick={() => deleteAuthor(favoriteObj._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default AllAuthors;
