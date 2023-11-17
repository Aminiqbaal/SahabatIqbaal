import Card from "./Card";
import postgresql from "../shared/asset/img/postgresql.png"
import mysql from "../shared/asset/img/mysql.png"
import mongodb from "../shared/asset/img/Mongodb.png"

import vuejs from "../shared/asset/img/vuejs.png"
import reactjs from "../shared/asset/img/reactjs.png"
import laravel from "../shared/asset/img/laravel.png"
import codeigniter from "../shared/asset/img/codeigniter.png"
import php from "../shared/asset/img/php.png"
import nodejs from "../shared/asset/img/nodejs.png"

import flutter from "../shared/asset/img/flutter.png"
import android_studio from "../shared/asset/img/android_studio.png"

import navicat from "../shared/asset/img/navicat.png"
import dbeaver from "../shared/asset/img/dbeaver.png"

import figma from "../shared/asset/img/figma.png"
import adobexd from "../shared/asset/img/adobexd.png"


function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">DEVELOPMENT TECHNOLOGY</h2>

            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={laravel} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={codeigniter} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={reactjs} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={vuejs} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={flutter} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={nodejs} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={php} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={android_studio} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={dbeaver} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={navicat} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12"> 
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={postgresql} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={mysql} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={mongodb} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={adobexd} />
                        </div>
                        <div className="col-md-3 mb-2">
                            <Card tinggi="200" sumber={figma} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Services;
