import { motion } from "framer-motion";
import React from "react";

const Card = ({ index, link, deleteCard }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.2 },
            }}
            className="card"
        >
            <div
                className="card__header"
                style={{
                    backgroundColor: link.color,
                }}
            >
                {link.title}
                <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteCard(link._id)}
                ></i>
            </div>
            <div className="card__body">
                <p className="card__description">{link.description}</p>
                <p className="card__url">{link.url}</p>
                <div className="card__actions">
                    <button className="card__button">
                        <a href={link.url}> Ir </a>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
