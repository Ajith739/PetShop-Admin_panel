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
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link ps-0 active" href="homepage">Home</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="favourite-stores">My Favourite Stores</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="products-filter">Products</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="wishlist">Wishlist</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="shipping-info">Shipping Info</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="../admin/add-product">Be a vendor</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="order-tracking">Track order</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link pe-0" href="checkout">Checkout</a></li>
            <li class="nav-item dropdown" data-nav-item="data-nav-item" data-more-item="data-more-item"><a class="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0" href="javascript: void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-boundary="window" data-bs-reference="parent"> More<span class="fas fa-angle-down ms-2"></span></a>
              <div class="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown" data-category-list="data-category-list"></div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="ecommerce-homepage pt-5 mb-9">

        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="py-0">
          <div class="container-small">
            <div class="scrollbar">
              <div class="d-flex justify-content-between"><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2 bg-warning-subtle" data-bs-theme="light"><span class="fs-4 uil uil-star text-warning"></span></div>
                  <p class="nav-label">Deals</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-shopping-bag"></span></div>
                  <p class="nav-label">Grocery</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-watch-alt"></span></div>
                  <p class="nav-label">Fashion</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-mobile-android"></span></div>
                  <p class="nav-label">Mobile</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-monitor"></span></div>
                  <p class="nav-label">Electronics</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-estate"></span></div>
                  <p class="nav-label">Home</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-lamp"></span></div>
                  <p class="nav-label">Dining</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-gift"></span></div>
                  <p class="nav-label">Gifts</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-wrench"></span></div>
                  <p class="nav-label">Tools</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-plane-departure"></span></div>
                  <p class="nav-label">Travel</p>
                </a><a class="icon-nav-item" href="#!">
                  <div class="icon-container mb-2" data-bs-theme="undefined"><span class="fs-4 uil uil-palette"></span></div>
                  <p class="nav-label">Others</p>
                </a></div>
            </div>
          </div><!-- end of .container-->
        </section><!-- <section> close ============================-->
        <!-- ============================================-->



        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="py-0 px-xl-3">
          <div class="container px-xl-0 px-xxl-3">
            <div class="row g-3 mb-9">
              <div class="col-12">
                <div class="whooping-banner w-100 rounded-3 overflow-hidden">
                  <div class="bg-holder z-n1 product-bg" style="background-image:url(/assets/img/e-commerce/whooping_banner_product.png);background-position: bottom right;"></div>
                  <!--/.bg-holder-->
                  <div class="bg-holder z-n1 shape-bg" style="background-image:url(/assets/img/e-commerce/whooping_banner_shape_2.png);background-position: bottom left;"></div>
                  <!--/.bg-holder-->
                  <div class="banner-text" data-bs-theme="light">
                    <h2 class="text-warning-light fw-bolder fs-lg-3 fs-xxl-2">Whooping <span class="gradient-text">60% </span>Off</h2>
                    <h3 class="fw-bolder fs-lg-5 fs-xxl-3 text-white">on everyday items</h3>
                  </div><a class="btn btn-lg btn-primary rounded-pill banner-button" href="#!">Shop Now</a>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="gift-items-banner w-100 rounded-3 overflow-hidden">
                  <div class="bg-holder z-n1 banner-bg" style="background-image:url(/assets/img/e-commerce/gift-items-banner-bg.png);"></div>
                  <!--/.bg-holder-->
                  <div class="banner-text text-md-center">
                    <h2 class="text-white fw-bolder fs-xl-4">Get <span class="gradient-text">10% Off </span><br class="d-md-none"> on gift items</h2><a class="btn btn-lg btn-primary rounded-pill banner-button" href="#!">Buy Now</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="best-in-market-banner d-flex h-100 px-4 px-sm-7 py-5 px-md-11 rounded-3 overflow-hidden">
                  <div class="bg-holder z-n1 banner-bg" style="background-image:url(/assets/img/e-commerce/best-in-market-bg.png);"></div>
                  <!--/.bg-holder-->
                  <div class="row align-items-center w-sm-100">
                    <div class="col-8">
                      <div class="banner-text">
                        <h2 class="text-white fw-bolder fs-sm-4 mb-5">MI 11 Pro<br><span class="fs-7 fs-sm-6"> Best in the market</span></h2><a class="btn btn-lg btn-warning rounded-pill banner-button" href="#!">Buy Now</a>
                      </div>
                    </div>
                    <div class="col-4"><img class="w-100 w-sm-75" src="/assets/img/e-commerce/5.png" alt=""></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-4 mb-6">
              <div class="col-12 col-lg-9 col-xxl-10">
                <div class="d-flex flex-between-center mb-3">
                  <div class="d-flex"><span class="fas fa-bolt text-warning fs-6"></span>
                    <h3 class="mx-2">Top Deals today</h3><span class="fas fa-bolt text-warning fs-6"></span>
                  </div><a class="btn btn-link btn-lg p-0 d-none d-md-block" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
                </div>
                <div class="swiper-theme-container products-slider">
                  <div class="swiper swiper theme-slider" data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"768":{"slidesPerView":3,"spaceBetween":20},"1200":{"slidesPerView":4,"spaceBetween":16},"1540":{"slidesPerView":5,"spaceBetween":16}}}'>
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/6.png" alt="" /></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">PlayStation 5 DualSense Wireless Controller</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(67 people rated)</span></p>
                            </div>
                            <div>
                              <p class="fs-9 text-body-highlight fw-bold mb-2">dbrand skin available</p>
                              <div class="d-flex align-items-center mb-1">
                                <p class="me-2 text-body text-decoration-line-through mb-0">$125.00</p>
                                <h3 class="text-body-emphasis mb-0">$89.00</h3>
                              </div>
                              <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/1.png" alt="" /><span class="badge text-bg-success fs-10 product-verified-badge">Verified<span class="fas fa-check ms-1"></span></span></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature ...</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(74 people rated)</span></p>
                            </div>
                            <div>
                              <div class="d-flex align-items-center mb-1">
                                <p class="me-2 text-body text-decoration-line-through mb-0">$49.99</p>
                                <h3 class="text-body-emphasis mb-0">$34.99</h3>
                              </div>
                              <p class="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in days</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/2.png" alt="" /></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">iPhone 13 pro max-Pacific Blue, 128GB storage</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(33 people rated)</span></p>
                            </div>
                            <div>
                              <p class="fs-9 text-body-highlight fw-bold mb-2">Stock limited</p>
                              <div class="d-flex align-items-center mb-1">
                                <p class="me-2 text-body text-decoration-line-through mb-0">$899.99</p>
                                <h3 class="text-body-emphasis mb-0">$850.99</h3>
                              </div>
                              <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">5 colors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/3.png" alt="" /></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(97 people rated)</span></p>
                            </div>
                            <div>
                              <p class="fs-9 text-body-highlight fw-bold mb-2">Apple care included</p>
                              <div class="d-flex align-items-center mb-1">
                                <p class="me-2 text-body text-decoration-line-through mb-0">$1299.00</p>
                                <h3 class="text-body-emphasis mb-0">$1149.00</h3>
                              </div>
                              <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/4.png" alt="" /></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple iMac 24&quot; 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(134 people rated)</span></p>
                            </div>
                            <div>
                              <p class="fs-9 text-body-highlight fw-bold mb-2">Exchange with kidney</p>
                              <div class="d-flex align-items-center mb-1">
                                <p class="me-2 text-body text-decoration-line-through mb-0">$1499.00</p>
                                <h3 class="text-body-emphasis mb-0">$1399.00</h3>
                              </div>
                              <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">7 colors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="position-relative text-decoration-none product-card h-100">
                          <div class="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/5.png" alt="" /></div><a class="stretched-link" href="product-details">
                                <h6 class="mb-2 lh-sm line-clamp-3 product-name">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</h6>
                              </a>
                              <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(59 people rated)</span></p>
                            </div>
                            <div>
                              <h3 class="text-body-emphasis">$59.00</h3>
                              <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-nav swiper-product-nav">
                    <div class="swiper-button-next"><span class="fas fa-chevron-right nav-icon"></span></div>
                    <div class="swiper-button-prev"><span class="fas fa-chevron-left nav-icon"></span></div>
                  </div>
                </div><a class="fw-bold d-md-none px-0" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
              </div>
              <div class="col-lg-3 d-none d-lg-block col-xxl-2">
                <div class="h-100 position-relative rounded-3 overflow-hidden">
                  <div class="bg-holder" style="background-image:url(/assets/img/e-commerce/4.png);"></div>
                  <!--/.bg-holder-->
                </div>
              </div>
              <div class="col-12 d-lg-none"><a href="#!"><img class="w-100 rounded-3" src="/assets/img/e-commerce/6.png" alt="" /></a></div>
            </div>
            <div class="mb-6">
              <div class="d-flex flex-between-center mb-3">
                <h3>Top Electronics</h3><a class="fw-bold d-none d-md-block" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
              </div>
              <div class="swiper-theme-container products-slider">
                <div class="swiper swiper theme-slider" data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"576":{"slidesPerView":3,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":20},"992":{"slidesPerView":5,"spaceBetween":20},"1200":{"slidesPerView":6,"spaceBetween":16}}}'>
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/5.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(59 people rated)</span></p>
                          </div>
                          <div>
                            <h3 class="text-body-emphasis">$59.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/7.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(13 people rated)</span></p>
                          </div>
                          <div>
                            <h3 class="text-body-emphasis">$799.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/12.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">HORI Racing Wheel Apex for PlayStation 4/3, and PC</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(64 people rated)</span></p>
                          </div>
                          <div>
                            <p class="fs-9 text-body-highlight fs-9 mb-0 fw-bold">Leather cover add-on available</p>
                            <p class="fs-9 text-body-tertiary fs-9 mb-2">supports Windows 11</p>
                            <h3 class="text-body-emphasis">$299.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">1 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container active" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove from wishlist"><span class="fas fa-heart" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/1.png" alt="" /><span class="badge text-bg-success fs-10 product-verified-badge">Verified<span class="fas fa-check ms-1"></span></span></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(32 people rated)</span></p>
                          </div>
                          <div>
                            <h3 class="text-body-emphasis">$20.00</h3>
                            <p class="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in 24 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/16.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple AirPods Pro</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(39 people rated)</span></p>
                          </div>
                          <div>
                            <p class="fs-9 text-body-highlight fs-9 mb-0 fw-bold">Free with iPhone 5s</p>
                            <p class="fs-9 text-body-tertiary fs-9 mb-2">Ships to Canada</p>
                            <h3 class="text-body-emphasis">$59.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/10.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple Magic Mouse (Wireless, Rechargable) - Silver</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
                          </div>
                          <div>
                            <p class="fs-9 text-body-highlight fs-9 mb-0 fw-bold">Bundle available</p>
                            <p class="fs-9 text-body-tertiary fs-9 mb-2">Charger not included</p>
                            <h3 class="text-body-emphasis">$89.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/8.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="text-body-quaternary fw-semibold ms-1">(7 people rated)</span></p>
                          </div>
                          <div>
                            <h3 class="text-body-emphasis">$98.00</h3>
                            <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">1 colors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-nav">
                  <div class="swiper-button-next"><span class="fas fa-chevron-right nav-icon"></span></div>
                  <div class="swiper-button-prev"><span class="fas fa-chevron-left nav-icon"></span></div>
                </div>
              </div><a class="fw-bold d-md-none" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
            </div>
            <div class="mb-6">
              <div class="d-flex flex-between-center mb-3">
                <h3>Best Offers</h3><a class="fw-bold d-none d-md-block" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
              </div>
              <div class="swiper-theme-container products-slider">
                <div class="swiper swiper theme-slider" data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"576":{"slidesPerView":3,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":20},"992":{"slidesPerView":5,"spaceBetween":20},"1200":{"slidesPerView":6,"spaceBetween":16}}}'>
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/25.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">35% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/27.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">18% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/26.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">15% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/18.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt star-icon text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">20% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/17.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Xbox Series S</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">12% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/24.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">FURINNO Computer Writing Desk, Walnut</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">16% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="position-relative text-decoration-none product-card h-100">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/18.png" alt="" /></div><a class="stretched-link" href="product-details">
                              <h6 class="mb-2 lh-sm line-clamp-3 product-name">Seagate Portable 2TB External Hard Drive Portable HDD</h6>
                            </a>
                            <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></p>
                          </div>
                          <div>
                            <h6 class="text-success lh-1 mb-0">15% off</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-nav">
                  <div class="swiper-button-next"><span class="fas fa-chevron-right nav-icon"></span></div>
                  <div class="swiper-button-prev"><span class="fas fa-chevron-left nav-icon"></span></div>
                </div>
              </div><a class="fw-bold d-md-none" href="#!">Explore more<span class="fas fa-chevron-right fs-9 ms-1"></span></a>
            </div>
            <div class="row flex-center mb-15 mt-11 gy-6">
              <div class="col-auto"><img class="d-dark-none" src="/assets/img/spot-illustrations/light_30.png" alt="" width="305" /><img class="d-light-none" src="/assets/img/spot-illustrations/dark_30.png" alt="" width="305" /></div>
              <div class="col-auto">
                <div class="text-center text-lg-start">
                  <h3 class="text-body-highlight mb-2"><span class="fw-semibold">Want to have the </span>ultimate <br class="d-md-none" />customer experience?</h3>
                  <h1 class="display-3 fw-semibold mb-4">Become a <span class="text-primary fw-bolder">member </span>today!</h1><a class="btn btn-lg btn-primary px-7" href="/auth/sign-up">Sign up<span class="fas fa-chevron-right ms-2 fs-9"></span></a>
                </div>
              </div>
            </div>
          </div><!-- end of .container-->
        </section><!-- <section> close ============================-->
        <!-- ============================================-->

      </div>`;

export default function Homepage() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
