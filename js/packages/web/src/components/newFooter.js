import React from 'react'
import homequbelogo from "/Footer Logo vertical.svg";
import rightArrow from "/Arrow right.svg";
import instagram from "/newInsta.svg";
import twitter from "/newTwitter.svg";
import linkedin from "/newLinked.svg";
import telegram from "/newTelegram.svg";
import discord from "/newDiscord.svg";

function newFooter() {
  return (
   <>
   <div className="">
        <div className="d-flex flex-column">
          <div className="footer-headings-cont">
            <div className="d-flex align-items-center">
              <img src={homequbelogo} alt="" />
              <span className="text-light io-text-logo align-self-center">.IO</span>
            </div>
            <span className="text-uppercase text-tag-line-footer align-self-center">Number 1 NFT store comparison is opensea</span>
          </div>

          <div class="container mt-5">
            <div class="align-items-start mb-3 footer-content-container">
              <div className="footer-item-cont">
                <div class=" new-footer-headline text-uppercase mb-2">
                  Learn More
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/stakeholders"
                    className="a-no-design"
                  >
                    StakeHolders
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/qube-tokenomics"
                    className="a-no-design"
                  >
                    Tokenomics
                  </a>
                </div>
              </div>

              <div className="footer-item-cont">
                <div class=" new-footer-headline text-uppercase mb-2">
                  Our Products
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.homeqube.io/"
                    className="a-no-design"
                    target="__blank"
                  >
                    Homeqube.io <img src={rightArrow} alt="" />
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.homeqube.ai/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    Homeqube.ai <img src={rightArrow} alt="" />
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.homeqube.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    Homeqube.com <img src={rightArrow} alt="" />
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/DAO-projects"
                    className="a-no-design"
                  >
                    Dao projects
                  </a>
                </div>
              </div>

              <div className="footer-item-cont">
                <div class=" new-footer-headline text-uppercase mb-2">
                  Resources
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/resources-blogs"
                    className="a-no-design"
                  >
                    Blogs
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/privacy-policy"
                    className="a-no-design"
                  >
                    Privacy policy
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/resources-faqs"
                    className="a-no-design"
                  >
                    Faqs
                  </a>
                </div>
              </div>

              <div className="footer-item-cont">
                <div class=" new-footer-headline text-uppercase mb-2">Legal</div>
                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/terms-of-use"
                    className="a-no-design"
                  >
                    Terms of use
                  </a>
                </div>

                <div class=" new-footer-text text-uppercase mb-2">
                  <a
                    href="https://www.qube.homeqube.com/privacy-policy"
                    className="a-no-design"
                  >
                    Privacy policy
                  </a>
                </div>

              </div>

              <div className="footer-item-cont mb-2">
                <div class=" new-footer-headline-2 text-uppercase  mb-2">
                  Connect with us
                </div>

                <div class=" mb-2">
                  <div className="d-flex pb-1">
                    <a
                      href="https://www.instagram.com/homeqube.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="a-no-design"
                    >
                      <img
                        src={instagram}
                        alt=""
                        className="new-footer-icons me-3"
                      />
                    </a>
                    <a
                      href="https://twitter.com/homeqube_ai"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="a-no-design"
                    >
                      <img
                        src={twitter}
                        alt=""
                        className="new-footer-icons me-3"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/homeqube-pte-ltd/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="a-no-design"
                    >
                      <img
                        src={linkedin}
                        alt=""
                        className="new-footer-icons me-3"
                      />
                    </a>
                    <a
                      href="https://t.me/homeqube"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="a-no-design"
                    >
                      <img
                        src={telegram}
                        alt=""
                        className="new-footer-icons me-3"
                      />
                    </a>
                    <a
                      href="https://discord.com/invite/JhQXmjm59e"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="a-no-design"
                    >
                      <img
                        src={discord}
                        alt=""
                        className="new-footer-icons me-3"
                      />
                    </a>
                  </div>
                </div>

                <div class=" new-footer-text text-uppercase  mb-2">
                  about@homeqube.com
                </div>

                <div class="text-nowrap new-footer-text text-uppercase  mb-2">
                  Homeqube Pte. Ltd.™
                </div>
                
                <div class=" new-footer-text text-uppercase mb-2">
                  Homeqube, Inc.
                </div>

                <div class=" new-footer-text text-uppercase  mb-2">
                  Homqube Dao, LLC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default newFooter