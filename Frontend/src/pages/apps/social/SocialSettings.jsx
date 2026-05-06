import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<div class="mb-9">
          <div class="row g-6">
            <div class="col-12 col-xl-4">
              <div class="card mb-5">
                <div class="card-header hover-actions-trigger position-relative mb-6" style="min-height: 130px; ">
                  <div class="bg-holder rounded-top" style="background-image: linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(/assets/img/generic/59.png)"><input class="d-none" id="upload-settings-cover-image" type="file" /><label class="cover-image-file-input" for="upload-settings-cover-image"></label>
                    <div class="hover-actions end-0 bottom-0 pe-1 pb-2 text-white dark__text-gray-1100"><span class="fa-solid fa-camera me-2"></span></div>
                  </div><input class="d-none" id="upload-settings-porfile-picture" type="file" /><label class="avatar avatar-4xl status-online feed-avatar-profile cursor-pointer" for="upload-settings-porfile-picture"><img class="rounded-circle img-thumbnail shadow-sm border-0" src="/assets/img/team/20.webp" width="200" alt="" /></label>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex flex-wrap mb-2 align-items-center">
                        <h3 class="me-2">Ansolo Lazinatov</h3><span class="fw-normal fs-8">u/hansolo</span>
                      </div>
                      <div class="d-flex d-xl-block d-xxl-flex align-items-center">
                        <div class="d-flex mb-xl-2 mb-xxl-0"><span class="fa-solid fa-user-group fs-10 me-2 me-lg-1 me-xl-2"></span>
                          <h6 class="d-inline-block mb-0">1297<span class="fw-semibold ms-1 me-4">Followers</span></h6>
                        </div>
                        <div class="d-flex"><span class="fa-solid fa-user-check fs-10 me-2 me-lg-1 me-xl-2"></span>
                          <h6 class="d-block d-xl-inline-block mb-0">3971<span class="fw-semibold ms-1">Following</span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-bottom border-translucent border-dashed pb-3 mb-4">
                <h5 class="text-body mb-3">Who will be able to see your profile?</h5>
                <div class="form-check"><input class="form-check-input" id="onlyMe" type="radio" checked="checked" name="profiileVisibility" /><label class="form-check-label fs-8" for="onlyMe">Only me</label></div>
                <div class="form-check"><input class="form-check-input" id="myFollowers" type="radio" name="profiileVisibility" /><label class="form-check-label fs-8" for="myFollowers">My followers</label></div>
                <div class="form-check"><input class="form-check-input" id="everyone" type="radio" name="profiileVisibility" /><label class="form-check-label fs-8" for="everyone">Everyone</label></div>
              </div>
              <div class="border-bottom border-translucent border-dashed pb-3 mb-4">
                <h5 class="text-body mb-3">Who can tag you?</h5>
                <div class="form-check"><input class="form-check-input" id="tagGroupMembers" type="radio" checked="checked" name="tagPermission" /><label class="form-check-label fs-8" for="tagGroupMembers">Group Members</label></div>
                <div class="form-check"><input class="form-check-input" id="tagEveryone" type="radio" name="tagPermission" /><label class="form-check-label fs-8" for="tagEveryone">Everyone</label></div>
              </div>
              <div class="border-bottom border-translucent border-dashed pb-3 mb-4">
                <div class="form-check"><input class="form-check-input" id="showEmail" type="checkbox" name="showEmail" /><label class="form-check-label fs-8" for="showEmail">Allow users to show your email</label></div>
                <div class="form-check"><input class="form-check-input" id="showExperiences" type="checkbox" name="showExperiences" /><label class="form-check-label fs-8" for="showExperiences">Allow users to show your experiences</label></div>
                <div class="form-check"><input class="form-check-input" id="showFollowers" type="checkbox" checked="checked" name="showFollowers" /><label class="form-check-label fs-8" for="showFollowers">Allow users to show your followers</label></div>
              </div>
              <div class="mb-4">
                <div class="form-check form-switch"><input class="form-check-input" id="showPhone" type="checkbox" checked="checked" name="showPhone" /><label class="form-check-label fs-8" for="showPhone">Show your phone number</label></div>
                <div class="form-check form-switch"><input class="form-check-input" id="permitFollow" type="checkbox" checked="checked" name="permitFollow" /><label class="form-check-label fs-8" for="permitFollow">Permit users to follow you.</label></div>
              </div>
            </div>
            <div class="col-12 col-xl-8">
              <div class="border-bottom mb-4">
                <div class="mb-6">
                  <h4 class="mb-4">Personal Information</h4>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="firstName" type="text" placeholder="First Name" /><label class="text-body-tertiary form-icon-label" for="firstName">FIRST NAME</label></div><span class="fa-solid fa-user text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="lastName" type="text" placeholder="Last Name" /><label class="text-body-tertiary form-icon-label" for="lastName">LAST NAME</label></div><span class="fa-solid fa-user text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="emailSocial" type="email" placeholder="Email" /><label class="text-body-tertiary form-icon-label" for="emailSocial">ENTER YOUR EMAIL</label></div><span class="fa-solid fa-envelope text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="phone" type="tel" placeholder="Phone" /><label class="text-body-tertiary form-icon-label" for="phone">ENTER YOUR PHONE</label></div><span class="fa-solid fa-phone text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><textarea class="form-control form-icon-input" id="info" style="height: 115px;" placeholder="Info"></textarea><label class="text-body-tertiary form-icon-label" for="info">Info</label></div><span class="fa-solid fa-circle-info text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-3 mb-6 gy-6 gy-sm-3">
                  <div class="col-12 col-sm-6">
                    <h4 class="mb-4">Company Info</h4>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating"><input class="form-control form-icon-input" id="companyName" type="text" placeholder="Company Name" /><label class="text-body-tertiary form-icon-label" for="companyName">COMPANY NAME</label></div><span class="fa-solid fa-building text-body fs-9 form-icon"></span>
                    </div>
                    <div class="form-icon-container">
                      <div class="form-floating"><input class="form-control form-icon-input" id="website" type="text" placeholder="Website" /><label class="text-body-tertiary form-icon-label" for="website">Website</label></div><span class="fa-solid fa-globe text-body fs-9 form-icon"></span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <h4 class="mb-4">Change Password</h4>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating"><input class="form-control form-icon-input" id="oldPassword" type="password" placeholder="Old password" /><label class="text-body-tertiary form-icon-label" for="oldPassword">Old Password</label></div><span class="fa-solid fa-lock text-body fs-9 form-icon"></span>
                    </div>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating"><input class="form-control form-icon-input" id="newPassword" type="password" placeholder="New password" /><label class="text-body-tertiary form-icon-label" for="newPassword">New Password</label></div><span class="fa-solid fa-key text-body fs-9 form-icon"></span>
                    </div>
                    <div class="form-icon-container">
                      <div class="form-floating"><input class="form-control form-icon-input" id="newPassword2" type="password" placeholder="Confirm New password" /><label class="text-body-tertiary form-icon-label" for="newPassword2">Confirm New Password</label></div><span class="fa-solid fa-key text-body fs-9 form-icon"></span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4 class="mb-4">Social</h4>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="facebook" type="text" placeholder="Facebook" /><label class="text-body-tertiary form-icon-label" for="facebook">Facebook</label></div><span class="fa-brands fa-facebook text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="twitter" type="text" placeholder="Twitter" /><label class="text-body-tertiary form-icon-label" for="twitter">Twitter</label></div><span class="fa-brands fa-twitter text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="linkedin" type="text" placeholder="Linkedin" /><label class="text-body-tertiary form-icon-label" for="linkedin">linkedin</label></div><span class="fa-brands fa-linkedin-in text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="youtube" type="text" placeholder="youtube" /><label class="text-body-tertiary form-icon-label" for="youtube">youtube</label></div><span class="fa-brands fa-youtube text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="artstation" type="text" placeholder="artstation" /><label class="text-body-tertiary form-icon-label" for="artstation">artstation</label></div><span class="fa-brands fa-artstation text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating"><input class="form-control form-icon-input" id="behance" type="text" placeholder="behance" /><label class="text-body-tertiary form-icon-label" for="behance">behance</label></div><span class="fa-brands fa-behance text-body fs-9 form-icon"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end mb-6">
                  <div><button class="btn btn-phoenix-secondary me-2">Cancel Changes</button>
                    <button class="btn btn-phoenix-primary">Save Information</button>
                  </div>
                </div>
              </div>
              <div class="row gy-5">
                <div class="col-12 col-md-6">
                  <h4 class="text-body-emphasis">Transfer Ownership</h4>
                  <p class="text-body-tertiary">Transfer this account to another person or to a company repository.</p><button class="btn btn-phoenix-warning">Transfer</button>
                </div>
                <div class="col-12 col-md-6">
                  <h4 class="text-body-emphasis">Account Deletion</h4>
                  <p class="text-body-tertiary">Transfer this account to another person or to a company repository.</p><button class="btn btn-phoenix-danger">Delete account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer position-absolute">
          <div class="row g-0 justify-content-between align-items-center h-100">
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 mt-2 mt-sm-0 text-body">Thank you for creating with Phoenix<span class="d-none d-sm-inline-block"></span><span class="d-none d-sm-inline-block mx-1">|</span><br class="d-sm-none" />2025 &copy;<a class="mx-1" href="https://themewagon.com/">Themewagon</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 text-body-tertiary text-opacity-85">v1.24.0</p>
            </div>
          </div>
        </footer>
      </div>
      <div class="modal fade" id="searchBoxModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style="--phoenix-backdrop-opacity: 1;">
        <div class="modal-dialog">
          <div class="modal-content mt-15 rounded-pill">
            <div class="modal-body p-0">
              <div class="search-box navbar-top-search-box" data-list='{"valueNames":["title"]}' style="width: auto;">
                <form class="position-relative" data-bs-toggle="search" data-bs-display="static"><input class="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                  <span class="fas fa-search search-box-icon"></span>
                </form>
                <div class="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button class="btn btn-link p-0" aria-label="Close"></button></div>
                <div class="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                  <div class="scrollbar-overlay" style="max-height: 30rem;">
                    <div class="list pb-3">
                      <h6 class="dropdown-header text-body-highlight fs-10 py-2">24 <span class="text-body-quaternary">results</span></h6>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="../e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="h-100 w-100 object-fit-cover rounded-3" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="../e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="img-fluid" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="/members">
                          <div class="avatar avatar-l status-online  me-2 text-body">
                            <img class="rounded-circle " src="/assets/img/team/40x40/10.webp" alt="" />
                          </div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">Carry Anna</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="/members">
                          <div class="avatar avatar-l  me-2 text-body">
                            <img class="rounded-circle " src="/assets/img/team/40x40/12.webp" alt="" />
                          </div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">John Smith</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="text-center">
                      <p class="fallback fw-bold fs-7 d-none">No Result Found.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

export default function SocialSettings() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
