

import PropTypes from 'prop-types'
import React from 'react'

import './Banner.css'

import Banner from "./Banner";

const ApiItem = ({ apiItem, title, description }) => (

    <div className="body auto">
        <h3 id="apisSearch" aria-hidden="true">APIs found <em><span>0</span> items</em></h3>
        <ul id="apisList" className="apis" data-view="list">


            <li>
                <h2>
                    <a href="https://developer.bgl.lu/index.php?option=com_apiportal&amp;view=apitester&amp;usage=api&amp;tab=tests&amp;apiId=9fa44e76-0f3c-4b4e-a10b-b8a6990fd670&amp;menuId=147&amp;managerId=1">BglCaptcha</a>
                </h2>
                <div className="api-icon">
                    <img src="templates/index.jpg"
                         onClick="location.href='https://developer.bgl.lu/index.php?option=com_apiportal&amp;view=apitester&amp;usage=api&amp;tab=tests&amp;apiId=9fa44e76-0f3c-4b4e-a10b-b8a6990fd670&amp;menuId=147&amp;managerId=1';"
                         alt="api icon" role="presentation" />
                </div>
                <div class="auto">
                    <h2>
                        This API will allow you to generate and validate a CAPTCHA image.
                        You can customize the size, the font size and the different colors of the captcha.
                    </h2>
                </div>
                <dl>

                    <dt>Type</dt>
                    <dd>REST</dd>
                    <dt>Version</dt>
                    <dd>1.0</dd>
                </dl>
                <div role="toolbar">
                    <a className="btn btn-default btn-primary icon gear"
                       href="https://developer.bgl.lu/index.php?option=com_apiportal&amp;view=apitester&amp;usage=api&amp;tab=tests&amp;apiId=9fa44e76-0f3c-4b4e-a10b-b8a6990fd670&amp;menuId=147&amp;managerId=1">Test
                        the API</a>
                    <a className="btn btn-default icon metrics"
                       href="https://developer.bgl.lu/index.php?option=com_apiportal&amp;view=apitester&amp;usage=api&amp;tab=messages&amp;sn=BglCaptcha&amp;Itemid=147&amp;managerId=1&amp;apiId=9fa44e76-0f3c-4b4e-a10b-b8a6990fd670&amp;menuId=147">View
                        metrics</a>
                </div>

            </li>

        </ul>
    </div>

)

ApiItem.propTypes = {
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
//    onClick: PropTypes.func.isRequired,
}

export default ApiItem