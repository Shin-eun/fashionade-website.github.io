import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/datasets.css';

import Asset_7 from '../../assets/images/Asset_7.png';

const Datasets = () => {
    const datas = [{}, {}, {}, {}, {}, {}, {}, {} ]
    return (
        <div className="datasets_wrap">
            <div className="datasets">
                <p className="h2">Datasets</p>
                <p className="datasets_desc">Use these to enrich fashion analytics.</p>
                <ul className="lists">
                    {
                        datas.map((index)=>(
                            <li className="list" key={index}>
                                <p className="img">
                                    <img src={Asset_7} />
                                </p>
                                <div className="list_text">
                                    <p className="list_title">Coco Datasets</p>
                                    <p className="list_type">
                                        <span>bounding box</span>
                                        <span>segmentation</span>
                                    </p>
                                    <p className="list_desc">
                                        COCO present a new dataset with the goal of
                                        advancing the state-of-the-art in object recognition
                                        by placing the question of object recognition in the
                                        context of the broader question of scene
                                        understanding.
                                    </p>
                                    <p className="datasets_btn">
                                        <Link to="/Datasets/detail">View Details</Link>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Datasets;