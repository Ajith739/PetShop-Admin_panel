import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="py-0">
        <div class="container-small">
          <div class="ecommerce-topbar">
            <nav class="navbar navbar-expand-lg navbar-light px-0">
              <div class="row gx-0 gy-2 w-100 flex-between-center">
                <div class="col-auto"><a class="text-decoration-none" href="/">
                    <div class="d-flex align-items-center"><img src="/assets/img/icons/logo.png" alt="phoenix" width="27" />
                      <h5 class="logo-text ms-2">phoenix</h5>
                    </div>
                  </a></div>
                <div class="col-auto order-md-1">
                  <ul class="navbar-nav navbar-nav-icons flex-row me-n2">
                    <li class="nav-item d-flex align-items-center">
                      <div class="theme-control-toggle feather-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style="height:32px;width:32px;"><span class="icon" data-feather="moon"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style="height:32px;width:32px;"><span class="icon" data-feather="sun"></span></label></div>
                    </li>
                    <li class="nav-item feather-icon-wait" style="height: 40px;"><a class="nav-link px-2 icon-indicator icon-indicator-primary" href="cart" role="button"><span class="text-body-tertiary" data-feather="shopping-cart" style="height:20px;width:20px;"></span><span class="icon-indicator-number">3</span></a></li>
                    <li class="nav-item dropdown feather-icon-wait" style="height: 40px;"><a class="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger" id="navbarTopDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span class="text-body-tertiary" data-feather="bell" style="height:20px;width:20px;"></span></a>
                      <div class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret mt-2" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                        <div class="card position-relative border-0">
                          <div class="card-header p-2">
                            <div class="d-flex justify-content-between">
                              <h5 class="text-body-emphasis mb-0">Notifications</h5><button class="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="scrollbar-overlay" style="height: 27rem;">
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/30.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>💬</span>Mentioned you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:41 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3">
                                      <div class="avatar-name rounded-circle"><span>J</span></div>
                                    </div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jane Foster</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>📅</span>Created an event.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:20 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle avatar-placeholder" src="/assets/img/team/40x40/avatar.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:30 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/57.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>💬</span>Mentioned you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:11 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/59.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Herman Carter</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👤</span>Tagged you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:58 PM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/58.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Benjamin Button</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:18 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer p-0 border-top border-translucent border-0">
                            <div class="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a class="fw-bolder" href="/notifications">Notification history</a></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown feather-icon-wait" style="height: 40px;"><a class="nav-link px-2" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span class="text-body-tertiary" data-feather="user" style="height:20px;width:20px;"></span></a>
                      <div class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2" aria-labelledby="navbarDropdownUser">
                        <div class="card position-relative border-0">
                          <div class="card-body p-0">
                            <div class="text-center pt-4 pb-3">
                              <div class="avatar avatar-xl ">
                                <img class="rounded-circle " src="/assets/img/team/72x72/57.webp" alt="" />
                              </div>
                              <h6 class="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                            </div>
                            <div class="mb-3 mx-3"><input class="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                          </div>
                          <div class="overflow-auto scrollbar" style="height: 10rem;">
                            <ul class="nav d-flex flex-column mb-2 pb-1">
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"><span class="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="lock"></span>Posts &amp; Activity</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
                            </ul>
                          </div>
                          <div class="card-footer p-0 border-top border-translucent">
                            <ul class="nav d-flex flex-column my-3">
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
                            </ul>
                            <hr />
                            <div class="px-3"> <a class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span class="me-2" data-feather="log-out"> </span>Sign out</a></div>
                            <div class="my-2 text-center fw-bold fs-10 text-body-quaternary"><a class="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a class="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a class="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-md-6">
                  <div class="search-box ecommerce-search-box w-100">
                    <form class="position-relative"><input class="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                      <span class="fas fa-search search-box-icon"></span>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->

      <nav class="navbar-responsive-navitems navbar-expand navbar-light bg-body-emphasis justify-content-between">
        <div class="container-small d-flex flex-between-center" data-navbar="data-navbar">
          <div class="dropdown feather-icon-wait"><button class="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none" data-category-btn="data-category-btn" data-bs-toggle="dropdown"><span class="fas fa-bars me-2"></span>Category</button>
            <div class="dropdown-menu border border-translucent py-0 category-dropdown-menu">
              <div class="card border-0 scrollbar" style="max-height: 657px;">
                <div class="card-body p-6 pb-3">
                  <div class="row gx-7 gy-5 mb-5">
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="pocket" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Collectibles &amp; Art</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Collectibles</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Antiques</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Sports memorabilia </a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Art</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="home" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Home &amp; Gardan</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Yard, Garden &amp; Outdoor</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Crafts</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Home Improvement</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Pet Supplies</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="globe" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Sporting Goods</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Outdoor Sports</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Team Sports</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Exercise &amp; Fitness</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Golf</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="monitor" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Electronics</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Computers &amp; Tablets</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Camera &amp; Photo</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">TV, Audio &amp; Surveillance</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Cell Ohone &amp; Accessories</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="truck" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Auto Parts &amp; Accessories</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">GPS &amp; Security Devices</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Rader &amp; Laser Detectors</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Care &amp; Detailing</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Scooter Parts &amp; Accessories</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="codesandbox" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Toys &amp; Hobbies</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Radio Control</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Kids Toys</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Action Figures</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Dolls &amp; Bears</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="watch" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Fashion</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Women</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Men</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Jewelry &amp; Watches</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Shoes</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="music" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Musical Instruments &amp; Gear</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Guitar</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Pro Audio Equipment</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">String</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Stage Lighting &amp; Effects</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="grid" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Other Categories</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Video Games &amp; Consoles</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Health &amp; Beauty</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Baby</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Business &amp; Industrial</a></div>
                    </div>
                  </div>
                  <div class="text-center border-top border-translucent pt-3"><a class="fw-bold" href="#!">See all Categories<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a></div>
                </div>
              </div>
            </div>
          </div>
          <ul class="navbar-nav justify-content-end align-items-center">
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link ps-0" href="homepage">Home</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="favourite-stores">My Favourite Stores</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="products-filter">Products</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="wishlist">Wishlist</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="shipping-info">Shipping Info</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="../admin/add-product">Be a vendor</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="order-tracking">Track order</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link pe-0 active" href="checkout">Checkout</a></li>
            <li class="nav-item dropdown" data-nav-item="data-nav-item" data-more-item="data-more-item"><a class="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0" href="javascript: void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-boundary="window" data-bs-reference="parent"> More<span class="fas fa-angle-down ms-2"></span></a>
              <div class="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown" data-category-list="data-category-list"></div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-5 pb-9">
        <div class="container-small">
          <nav class="mb-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#!">Page 1</a></li>
              <li class="breadcrumb-item"><a href="#!">Page 2</a></li>
              <li class="breadcrumb-item active" aria-current="page">Default</li>
            </ol>
          </nav>
          <h2 class="mb-5">Check out</h2>
          <div class="row justify-content-between">
            <div class="col-lg-7 col-xl-7">
              <form>
                <div class="d-flex align-items-end">
                  <h3 class="mb-0 me-3">Shipping Details</h3><button class="btn btn-link p-0" type="button">Edit</button>
                </div>
                <table class="table table-borderless mt-4">
                  <tbody>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="user" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Name</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">:</td>
                      <td class="py-2 px-3">
                        <h5 class="lh-sm fw-normal text-body-secondary">Shatinon Mekalan</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="home" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Address</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">:</td>
                      <td class="py-2 px-3">
                        <h5 class="lh-lg fw-normal text-body-secondary">Apt: 6/B, 192 Edsel Road, Van Nuys <br> California, USA 96580</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="phone" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Phone</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">: </td>
                      <td class="py-2 px-3">
                        <h5 class="lh-sm fw-normal text-body-secondary">818-414-4092</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr class="my-6">
                <h3>Billing Details</h3>
                <div class="form-check"><input class="form-check-input" id="sameAsShipping" type="checkbox" checked="checked" /><label class="form-check-label fs-8 fw-normal" for="sameAsShipping">Same as shipping address
                  </label></div>
                <table class="table table-borderless mt-4">
                  <tbody>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="user" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Name</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">:</td>
                      <td class="py-2 px-3">
                        <h5 class="lh-sm fw-normal text-body-secondary">Shatinon Mekalan</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="home" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Address</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">:</td>
                      <td class="py-2 px-3">
                        <h5 class="lh-lg fw-normal text-body-secondary">Apt: 6/B, 192 Edsel Road, Van Nuys <br> California, USA 96580</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 ps-0">
                        <div class="d-flex"><span class="fs-3 me-2" data-feather="phone" style="height:16px; width:16px;"> </span>
                          <h5 class="lh-sm me-4">Phone</h5>
                        </div>
                      </td>
                      <td class="py-2 fw-bold lh-sm">:</td>
                      <td class="py-2 px-3">
                        <h5 class="lh-sm fw-normal text-body-secondary">818-414-4092</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr class="my-6">
                <h3 class="mb-5">Delivery Type</h3>
                <div class="row gy-6">
                  <div class="col-12 col-md-6">
                    <div class="d-flex flex-wrap align-items-center mb-3">
                      <div class="form-check mb-0"><input class="form-check-input" type="radio" name="shippingRadio" id="free_shipping" /><label class="form-check-label fs-8 text-body" for="free_shipping">Free Shipping</label></div><span class="d-inline-block text-body-emphasis fw-bold ms-2">$0.00</span>
                    </div>
                    <div class="ps-4">
                      <h6 class="text-body-tertiary mb-2">Est. delivery: Jun 21 – Jul 20</h6>
                      <h6 class="text-info lh-base mb-0">Get Free Shipped products in Time!</h6>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="d-flex flex-wrap align-items-center mb-3">
                      <div class="form-check mb-0"><input class="form-check-input" type="radio" name="shippingRadio" id="two_days_shipping" /><label class="form-check-label fs-8 text-body" for="two_days_shipping">Two days Shipping</label></div><span class="d-inline-block text-body-emphasis fw-bold ms-2">$20.00</span>
                    </div>
                    <div class="ps-4">
                      <h6 class="text-body-tertiary mb-2">Est. delivery: Jun 21 – Jul 20</h6>
                      <h6 class="text-info lh-base mb-0">Everything faster with minimum shipping fee.</h6>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="d-flex flex-wrap align-items-center mb-3">
                      <div class="form-check mb-0"><input class="form-check-input" type="radio" name="shippingRadio" id="standard_shipping" /><label class="form-check-label fs-8 text-body" for="standard_shipping">Standard Shipping</label></div><span class="d-inline-block text-body-emphasis fw-bold ms-2">$10.00</span>
                    </div>
                    <div class="ps-4">
                      <h6 class="text-body-tertiary mb-2">Est. delivery: Jun 21 – Jul 20</h6>
                      <h6 class="text-info lh-base mb-0">Get timely delivery with economy shipping.</h6>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="d-flex flex-wrap align-items-center mb-3">
                      <div class="form-check mb-0"><input class="form-check-input" type="radio" name="shippingRadio" checked="checked" id="one_day_shipping" /><label class="form-check-label fs-8 text-body" for="one_day_shipping">One day Shipping</label></div><span class="d-inline-block text-body-emphasis fw-bold ms-2">$30.00</span><span class="badge badge-phoenix badge-phoenix-warning ms-2 ms-lg-4 ms-xl-2">Popular</span>
                    </div>
                    <div class="ps-4">
                      <h6 class="text-body-tertiary mb-2">Est. delivery: Jun 21 – Jul 20</h6>
                      <h6 class="text-info lh-base mb-0">Highest priority shipping at the lowest cost.</h6>
                    </div>
                  </div>
                </div>
                <hr class="my-6">
                <h3 class="mb-5">Payment Method</h3>
                <div class="row g-4 mb-7">
                  <div class="col-12">
                    <div class="row gx-lg-11">
                      <div class="col-md-auto">
                        <div class="form-check"><input class="form-check-input" id="creditCard" type="radio" name="paymentMethod" checked="checked" /><label class="form-check-label fs-8 text-body text-nowrap d-flex gap-2" for="creditCard">Credit card<img class="h-100" src="/assets/img/logos/visa.png" alt="" /><img class="h-100" src="/assets/img/logos/discover.png" alt="" /><img class="h-100" src="/assets/img/logos/mastercard.png" alt="" /><img class="h-100" src="/assets/img/logos/american_express.png" alt="" /></label></div>
                      </div>
                      <div class="col-12 col-md-auto">
                        <div class="form-check"><input class="form-check-input" id="paypal" type="radio" name="paymentMethod" /><label class="form-check-label fs-8 text-body" for="paypal">Paypal </label></div>
                      </div>
                      <div class="col-12 col-md-auto">
                        <div class="form-check"><input class="form-check-input" id="coupon" type="radio" name="paymentMethod" /><label class="form-check-label fs-8 text-body" for="coupon">Coupon </label></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6"><label class="form-label fs-8 text-body-highlight ps-0 text-transform-none" for="selectCard">Select card</label><select class="form-select text-body-emphasis" id="selectCard">
                      <option selected="selected">Select a card</option>
                      <option value="visa">Visa</option>
                      <option value="discover">Discover</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="american-express">American Express</option>
                    </select></div>
                  <div class="col-md-6"><label class="form-label fs-8 text-body-highlight ps-0 text-transform-none" for="inputCardNumber">Card number</label><input class="form-control" id="inputCardNumber" type="number" placeholder="Enter card number" aria-label="Card number" /></div>
                  <div class="col-12"><label class="form-label fs-8 text-body-highlight ps-0 text-transform-none" for="inputName">Full name</label><input class="form-control" id="inputName" type="text" placeholder="Ansolo Lazinatov" aria-label="Full name" /></div>
                  <div class="col-md-6"><label class="form-label fs-8 text-body-highlight ps-0 text-transform-none">Expires on</label>
                    <div class="d-flex"><select class="form-select text-body-emphasis me-3">
                        <option selected="selected">Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                      </select><select class="form-select text-body-emphasis">
                        <option selected="selected">Year</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                      </select></div>
                  </div>
                  <div class="col-md-6"><label class="form-label fs-8 text-body-highlight ps-0 text-transform-none" for="inputCardCVC">CVC</label><input class="form-control" id="inputCardCVC" type="number" placeholder="Enter a valid CVC" aria-label="CVC" /></div>
                  <div class="col-12">
                    <div class="form-check"><input class="form-check-input" id="gridCheck" type="checkbox" /><label class="form-check-label text-body-emphasis fs-8" for="gridCheck">Save Card Details</label></div>
                  </div>
                </div>
                <div class="row g-2 mb-5 mb-lg-0">
                  <div class="col-md-8 col-lg-9 d-grid"><button class="btn btn-primary" type="submit">Pay $695.20</button></div>
                  <div class="col-md-4 col-lg-3 d-grid"><button class="btn btn-phoenix-secondary text-nowrap" type="submit">Save Order and Exit</button></div>
                </div>
              </form>
            </div>
            <div class="col-lg-5 col-xl-4">
              <div class="card mt-3 mt-lg-0">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <h3 class="mb-0">Summary</h3><button class="btn btn-link pe-0" type="button">Edit cart</button>
                  </div>
                  <div class="border-dashed border-bottom border-translucent mt-4">
                    <div class="ms-n2">
                      <div class="row align-items-center mb-2 g-3">
                        <div class="col-8 col-md-7 col-lg-8">
                          <div class="d-flex align-items-center"><img class="me-2 ms-1" src="/assets/img/products/1.png" width="40" alt="" />
                            <h6 class="fw-semibold text-body-highlight lh-base">Fitbit Sense Advanced Smartwatch with... </h6>
                          </div>
                        </div>
                        <div class="col-2 col-md-3 col-lg-2">
                          <h6 class="fs-10 mb-0">x1</h6>
                        </div>
                        <div class="col-2 ps-0">
                          <h5 class="mb-0 fw-semibold text-end">$398</h5>
                        </div>
                      </div>
                      <div class="row align-items-center mb-2 g-3">
                        <div class="col-8 col-md-7 col-lg-8">
                          <div class="d-flex align-items-center"><img class="me-2 ms-1" src="/assets/img/products/2.png" width="40" alt="" />
                            <h6 class="fw-semibold text-body-highlight lh-base">iPhone 13 pro max-Pacific Blue-128GB </h6>
                          </div>
                        </div>
                        <div class="col-2 col-md-3 col-lg-2">
                          <h6 class="fs-10 mb-0">x1</h6>
                        </div>
                        <div class="col-2 ps-0">
                          <h5 class="mb-0 fw-semibold text-end">$398</h5>
                        </div>
                      </div>
                      <div class="row align-items-center mb-5 g-3">
                        <div class="col-8 col-md-7 col-lg-8">
                          <div class="d-flex align-items-center"><img class="me-2 ms-1" src="/assets/img/products/3.png" width="40" alt="" />
                            <h6 class="fw-semibold text-body-highlight lh-base">Apple MacBook Pro 13 inch-M1-8/256GB</h6>
                          </div>
                        </div>
                        <div class="col-2 col-md-3 col-lg-2">
                          <h6 class="fs-10 mb-0">x1</h6>
                        </div>
                        <div class="col-2 ps-0">
                          <h5 class="mb-0 fw-semibold text-end">$65</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-dashed border-bottom border-translucent mt-4">
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="text-body fw-semibold">Items subtotal: </h5>
                      <h5 class="text-body fw-semibold">$691</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="text-body fw-semibold">Discount: </h5>
                      <h5 class="text-danger fw-semibold">-$59</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="text-body fw-semibold">Tax: </h5>
                      <h5 class="text-body fw-semibold">$126.20</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="text-body fw-semibold">Subtotal </h5>
                      <h5 class="text-body fw-semibold">$665</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="text-body fw-semibold">Shipping Cost </h5>
                      <h5 class="text-body fw-semibold">$30 </h5>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between border-dashed-y pt-3">
                    <h4 class="mb-0">Total :</h4>
                    <h4 class="mb-0">$695.20</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->`;

export default function Checkout() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
