<script setup>
import { lang } from "@/uitiles/currentLang";
import { ref, onMounted } from "vue";
import {
  DownOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons-vue";
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_top">
        <div class="footer_logo">
          <a href="#">
            <img src="@/assets/images/logo.png" alt="footer logo" />
          </a>
          <p>Islom moliyasiga asoslangan kuchmas mulkka investitsiya.</p>
        </div>

        <div class="footer_contact">
          <div class="social">
            <h2>Obuna bo’ling</h2>
            <ul>
              <li>
                <a href="#"
                  ><svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <mask
                      id="mask0_8_284"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="17"
                    >
                      <rect
                        y="0.5"
                        width="16"
                        height="16"
                        fill="url(#pattern0_8_284)"
                      />
                    </mask>
                    <g mask="url(#mask0_8_284)">
                      <rect y="0.5" width="16" height="16" fill="white" />
                    </g>
                    <defs>
                      <pattern
                        id="pattern0_8_284"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0_8_284"
                          transform="translate(0 0.0625) scale(0.0078125)"
                        />
                      </pattern>
                      <image
                        id="image0_8_284"
                        width="128"
                        height="112"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#"><InstagramOutlined /></a>
              </li>
              <li>
                <a href="#"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.03065 3.90992V5.74192H4.68799V7.98192H6.03065V14.6393H8.78665V7.98259H10.6367C10.6367 7.98259 10.81 6.90859 10.894 5.73392H8.79799V4.20192C8.79799 3.97325 9.09799 3.66525 9.39532 3.66525H10.898V1.33325H8.85532C5.96199 1.33325 6.03065 3.57525 6.03065 3.90992Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#"><YoutubeFilled/></a>
              </li>
            </ul>
          </div>
          <div class="contact">
            <h2>Aloqa uchun</h2>
            <a href="tel:+998900096009">+998900096009</a>
          </div>
        </div>
      </div>
      <div class="footer_line"></div>
      <div class="footer_bottom">
        <p>© 2024 All Rights Reserved</p>
        <ul>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Public offer</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
