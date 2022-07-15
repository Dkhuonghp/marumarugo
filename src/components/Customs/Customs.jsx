import React from 'react'
import "./Customs"

export default function Customs() {
  return (
    <div>
        
        <canvas id="c"></canvas>
        <div class="controls">

            <div class="options">

                <div class="option" data-option="laces">
                    <span>シューレース</span>
                </div>
                <div class="option" data-option="sole">
                    <span>ミッドソール </span>
                </div>
                <div class="option" data-option="upper_1">
                    <span>クォーター </span>
                </div>
                <div class="option" data-option="upper_2">
                    <span>チップ</span>
                </div>
            </div>
            <div id="js-tray" class="tray">
                <div id="js-tray-slide" class="tray__slide"></div>
            </div>
        </div>
    </div>
  )
}

