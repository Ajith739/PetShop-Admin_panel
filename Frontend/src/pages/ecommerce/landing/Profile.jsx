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
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link pe-0" href="checkout">Checkout</a></li>
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
          <div class="row align-items-center justify-content-between g-3 mb-4">
            <div class="col-auto">
              <h2 class="mb-0">Profile</h2>
            </div>
            <div class="col-auto">
              <div class="row g-2 g-sm-3">
                <div class="col-auto"><button class="btn btn-phoenix-danger"><span class="fas fa-trash-alt me-2"></span>Delete customer</button></div>
                <div class="col-auto"><button class="btn btn-phoenix-secondary"><span class="fas fa-key me-2"></span>Reset password</button></div>
              </div>
            </div>
          </div>
          <div class="row g-3 mb-6">
            <div class="col-12 col-lg-8">
              <div class="card h-100">
                <div class="card-body">
                  <div class="border-bottom border-dashed pb-4">
                    <div class="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                      <div class="col-12 col-sm-auto"><input class="d-none" id="avatarFile" type="file" /><label class="cursor-pointer avatar avatar-5xl" for="avatarFile"><img class="rounded-circle" src="/assets/img/team/15.webp" alt="" /></label></div>
                      <div class="col-12 col-sm-auto flex-1">
                        <h3>Ansolo Lazinatov</h3>
                        <p class="text-body-secondary">Joined 3 months ago</p>
                        <div><a class="me-2" href="#!"><span class="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover"></span></a><a class="me-2" href="#!"><span class="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover"></span></a><a href="#!"><span class="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover"></span></a></div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-between-center pt-4">
                    <div>
                      <h6 class="mb-2 text-body-secondary">Total Spent</h6>
                      <h4 class="fs-7 text-body-highlight mb-0">$894</h4>
                    </div>
                    <div class="text-end">
                      <h6 class="mb-2 text-body-secondary">Last Order</h6>
                      <h4 class="fs-7 text-body-highlight mb-0">1 week ago</h4>
                    </div>
                    <div class="text-end">
                      <h6 class="mb-2 text-body-secondary">Total Orders</h6>
                      <h4 class="fs-7 text-body-highlight mb-0">97 </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="border-bottom border-dashed">
                    <h4 class="mb-3">Default Address<button class="btn btn-link p-0" type="button"> <span class="fas fa-edit fs-9 ms-3 text-body-quaternary"></span></button></h4>
                  </div>
                  <div class="pt-4 mb-7 mb-lg-4 mb-xl-7">
                    <div class="row justify-content-between">
                      <div class="col-auto">
                        <h5 class="text-body-highlight">Address</h5>
                      </div>
                      <div class="col-auto">
                        <p class="text-body-secondary">Vancouver, British Columbia<br />Canada</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-top border-dashed pt-4">
                    <div class="row flex-between-center mb-2">
                      <div class="col-auto">
                        <h5 class="text-body-highlight mb-0">Email</h5>
                      </div>
                      <div class="col-auto"><a class="lh-1" href="mailto:shatinon@jeemail.com">shatinon@jeemail.com</a></div>
                    </div>
                    <div class="row flex-between-center">
                      <div class="col-auto">
                        <h5 class="text-body-highlight mb-0">Phone</h5>
                      </div>
                      <div class="col-auto"><a href="tel:+1234567890">+1234567890</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="scrollbar">
              <ul class="nav nav-underline fs-9 flex-nowrap mb-3 pb-1" id="myTab" role="tablist">
                <li class="nav-item me-3"><a class="nav-link text-nowrap active" id="orders-tab" data-bs-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="true"><span class="fas fa-shopping-cart me-2"></span>Orders <span class="text-body-tertiary fw-normal"> (35)</span></a></li>
                <li class="nav-item me-3"><a class="nav-link text-nowrap" id="reviews-tab" data-bs-toggle="tab" href="#tab-reviews" role="tab" aria-controls="tab-orders" aria-selected="true"><span class="fas fa-star me-2"></span>Reviews<span class="text-body-tertiary fw-normal"> (24)</span></a></li>
                <li class="nav-item me-3"><a class="nav-link text-nowrap" id="wishlist-tab" data-bs-toggle="tab" href="#tab-wishlist" role="tab" aria-controls="tab-orders" aria-selected="true"><span class="fas fa-heart me-2"></span>Wishlist</a></li>
                <li class="nav-item me-3"><a class="nav-link text-nowrap" id="stores-tab" data-bs-toggle="tab" href="#tab-stores" role="tab" aria-controls="tab-stores" aria-selected="true"><span class="fas fa-home me-2"></span>Stores</a></li>
                <li class="nav-item"><a class="nav-link text-nowrap" id="personal-info-tab" data-bs-toggle="tab" href="#tab-personal-info" role="tab" aria-controls="tab-personal-info" aria-selected="true"><span class="fas fa-user me-2"></span>Personal info</a></li>
              </ul>
            </div>
            <div class="tab-content" id="profileTabContent">
              <div class="tab-pane fade show active" id="tab-orders" role="tabpanel" aria-labelledby="orders-tab">
                <div class="border-top border-bottom border-translucent" id="profileOrdersTable" data-list='{"valueNames":["order","status","delivery","date","total"],"page":6,"pagination":true}'>
                  <div class="table-responsive scrollbar">
                    <table class="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th class="sort white-space-nowrap align-middle pe-3 ps-0" scope="col" data-sort="order" style="width:15%; min-width:140px">ORDER</th>
                          <th class="sort align-middle pe-3" scope="col" data-sort="status" style="width:15%; min-width:180px">STATUS</th>
                          <th class="sort align-middle text-start" scope="col" data-sort="delivery" style="width:20%; min-width:160px">DELIVERY METHOD</th>
                          <th class="sort align-middle pe-0 text-end" scope="col" data-sort="date" style="width:15%; min-width:160px">DATE</th>
                          <th class="sort align-middle text-end" scope="col" data-sort="total" style="width:15%; min-width:160px">TOTAL</th>
                          <th class="align-middle pe-0 text-end" scope="col" style="width:15%;"> </th>
                        </tr>
                      </thead>
                      <tbody class="list" id="profile-order-table-body">
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2453</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-success"><span class="badge-label">Shipped</span><span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Cash on delivery</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Dec 12, 12:56 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$87</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2452</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-info"><span class="badge-label">Ready to pickup</span><span class="ms-1" data-feather="info" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Dec 9, 2:28PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$7264</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2451</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-warning"><span class="badge-label">Partially fulfilled</span><span class="ms-1" data-feather="clock" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Local pickup</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Dec 4, 12:56 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$375</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2450</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-secondary"><span class="badge-label">Canceled</span><span class="ms-1" data-feather="x" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Dec 1, 4:07 AM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$657</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2449</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-success"><span class="badge-label">fulfilled</span><span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Express</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Nov 28, 7:28 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$9562</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2448</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-danger"><span class="badge-label">Unfulfilled</span><span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Local delivery</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Nov 24, 10:16 AM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$256</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2447</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-secondary"><span class="badge-label">Cancelled</span><span class="ms-1" data-feather="x" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Nov 10, 12:00 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$898</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-primary" href="#!">#2446</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-success"><span class="badge-label">shipped</span><span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Express</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Nov 12, 12:20 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-highlight">$4116</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="order align-middle white-space-nowrap py-2 ps-0"><a class="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2445</a></td>
                          <td class="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span class="badge badge-phoenix fs-10 badge-phoenix-success"><span class="badge-label">fulfilled</span><span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
                          <td class="total align-middle text-body-tertiary text-end py-2">Oct 19, 1:20 PM</td>
                          <td class="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$4116</td>
                          <td class="align-middle text-end white-space-nowrap pe-0 action py-2">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div class="col-auto d-flex">
                      <p class="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a class="fw-semibold" href="#!" data-list-view="*">View all<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a class="fw-semibold d-none" href="#!" data-list-view="less">View Less<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                    </div>
                    <div class="col-auto d-flex"><button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                      <ul class="mb-0 pagination"></ul><button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="border-y" id="profileRatingTable" data-list='{"valueNames":["product","rating","review","status","date"],"page":6,"pagination":true}'>
                  <div class="table-responsive scrollbar">
                    <table class="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th class="sort white-space-nowrap align-middle" scope="col" style="min-width:220px;" data-sort="product">PRODUCT</th>
                          <th class="sort align-middle" scope="col" data-sort="rating" style="max-width:10%;">RATING</th>
                          <th class="sort align-middle" scope="col" style="min-width:480px" data-sort="review">REVIEW</th>
                          <th class="sort align-middle" scope="col" style="max-width:12%;" data-sort="status">STATUS</th>
                          <th class="sort text-end align-middle" scope="col" style="max-width:10%;" data-sort="date">DATE</th>
                          <th class="sort text-end pe-0 align-middle" scope="col" style="width: 7%"> </th>
                        </tr>
                      </thead>
                      <tbody class="list" id="profile-review-table-body">
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Just now</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span class="ms-1" data-feather="clock" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Dec 9, 2:28 PM</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star-half-alt star-icon text-warning"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Dec 4, 12:56 PM</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">Apple iMac 24&quot; 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Nov 28, 7:28 PM</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">It performs exactly as expected. There are three of these in the family.</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-secondary">Cancelled<span class="ms-1" data-feather="x" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Nov 24, 10:16 AM</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">PlayStation 5 DualSense Wireless Controller</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span class="ms-1" data-feather="check" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Just now</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle product pe-3"><a class="fw-semibold line-clamp-1" href="product-details">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
                          <td class="align-middle rating white-space-nowrap fs-10"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="align-middle review pe-7">
                            <p class="fw-semibold text-body-highlight mb-0 line-clamp-2">The response time and service I received when contacted the designers were Phenomenal!</p>
                          </td>
                          <td class="align-middle status pe-9"><span class="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span class="ms-1" data-feather="fas fa-stopwatch" style="height:12.8px;width:12.8px;"></span></span></td>
                          <td class="align-middle text-end date white-space-nowrap">
                            <p class="text-body-tertiary mb-0">Nov 07, 9:00 PM</p>
                          </td>
                          <td class="align-middle white-space-nowrap text-end pe-0">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div class="col-auto d-flex">
                      <p class="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a class="fw-semibold" href="#!" data-list-view="*">View all<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a class="fw-semibold d-none" href="#!" data-list-view="less">View Less<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                    </div>
                    <div class="col-auto d-flex"><button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                      <ul class="mb-0 pagination"></ul><button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                <div class="border-y border-translucent" id="productWishlistTable" data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":5,"pagination":true}'>
                  <div class="table-responsive scrollbar">
                    <table class="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th class="sort white-space-nowrap align-middle fs-10" scope="col" style="width:7%;"></th>
                          <th class="sort white-space-nowrap align-middle" scope="col" style="width:30%; min-width:250px;" data-sort="products">PRODUCTS</th>
                          <th class="sort align-middle" scope="col" data-sort="color" style="width:16%;">COLOR</th>
                          <th class="sort align-middle" scope="col" data-sort="size" style="width:10%;">SIZE</th>
                          <th class="sort align-middle text-end" scope="col" data-sort="price" style="width:10%;">PRICE</th>
                          <th class="sort align-middle text-end pe-0" scope="col" style="width:35%;"> </th>
                        </tr>
                      </thead>
                      <tbody class="list" id="profile-wishlist-table-body">
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/1.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/7.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Black</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Pro</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$1,499</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/6.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">PlayStation 5 DualSense Wireless Controller</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">White</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Regular</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$299</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/3.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Space Gray</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Pro</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$1,699</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/4.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Apple iMac 24&quot; 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Ocean Blue</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">21&quot;</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$65</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/10.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Apple Magic Mouse (Wireless, Rechargable) - Silver</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">White</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Regular</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$30</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/8.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Black</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">MD</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$40</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/12.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">HORI Racing Wheel Apex for PlayStation 4_3, and PC</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Black</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">45</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$130</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a class="border border-translucent rounded-2 d-inline-block" href="product-details"><img src="/assets/img/products/17.png" alt="" width="53" /></a></td>
                          <td class="products align-middle pe-11"><a class="fw-semibold mb-0 line-clamp-1" href="product-details">Xbox Series S</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body">Space Gray</td>
                          <td class="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">sm</td>
                          <td class="price align-middle text-body fs-9 fw-semibold text-end">$99</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button class="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span class="fas fa-trash"></span></button>
                            <button class="btn btn-primary fs-10"><span class="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div class="col-auto d-flex">
                      <p class="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a class="fw-semibold" href="#!" data-list-view="*">View all<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a class="fw-semibold d-none" href="#!" data-list-view="less">View Less<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                    </div>
                    <div class="col-auto d-flex"><button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                      <ul class="mb-0 pagination"></ul><button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-stores" role="tabpanel" aria-labelledby="wishlist-tab">
                <div class="border-y border-translucent mb-6" id="profileStoreTable" data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":5,"pagination":true}'>
                  <div class="table-responsive scrollbar">
                    <table class="table table-sm fs-9 mb-0">
                      <thead>
                        <tr>
                          <th class="sort white-space-nowrap align-middle fs-10" scope="col" style="width:7%; min-width:80px;"></th>
                          <th class="sort white-space-nowrap align-middle" scope="col" style="width:20%; min-width:150px;" data-sort="products">VENDOR</th>
                          <th class="sort align-middle" scope="col" data-sort="color" style="width:15%; min-width:150px;">STORE RATING</th>
                          <th class="sort align-middle text-end" scope="col" data-sort="price" style="width:12%; min-width:150px;">ORDERS</th>
                          <th class="sort align-middle text-end" scope="col" data-sort="size" style="width:15%; min-width:150px;">TOTAL SPENT</th>
                          <th class="sort align-middle text-end" scope="col" data-sort="price" style="width:15%; min-width:150px;">LAST ORDER</th>
                          <th class="sort align-middle text-end pe-0" scope="col" style="width:30%; min-width:150px;"> </th>
                        </tr>
                      </thead>
                      <tbody class="list" id="profile-stores-table-body">
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/assets/img/brand2/dell.png" alt="" width="53" /></a></td>
                          <td class="products align-middle"><a class="fw-semibold mb-0" href="#!">Dell Technologies</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></td>
                          <td class="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">3</td>
                          <td class="price align-middle text-end text-body fw-semibold">$ 23987</td>
                          <td class="price align-middle text-body-tertiary fs-9 text-end">Dec 12, 12:56 PM</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/assets/img/brand2/honda.png" alt="" width="53" /></a></td>
                          <td class="products align-middle"><a class="fw-semibold mb-0" href="#!">Honda</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">5</td>
                          <td class="price align-middle text-end text-body fw-semibold">$ 1250</td>
                          <td class="price align-middle text-body-tertiary fs-9 text-end">Dec 09, 10:48 AM</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/assets/img/brand2/xiaomi.png" alt="" width="53" /></a></td>
                          <td class="products align-middle"><a class="fw-semibold mb-0" href="#!">Xiaomi</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">6</td>
                          <td class="price align-middle text-end text-body fw-semibold">$ 360</td>
                          <td class="price align-middle text-body-tertiary fs-9 text-end">Dec 03, 05:45 PM</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/assets/img/brand/huawei.png" alt="" width="53" /></a></td>
                          <td class="products align-middle"><a class="fw-semibold mb-0" href="#!">Huawei Shop BD</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">1</td>
                          <td class="price align-middle text-end text-body fw-semibold">$1,799</td>
                          <td class="price align-middle text-body-tertiary fs-9 text-end">Nov 27, 06:20 PM</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="hover-actions-trigger btn-reveal-trigger position-static">
                          <td class="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/assets/img/brand2/intel-2.png" alt="" width="53" /></a></td>
                          <td class="products align-middle"><a class="fw-semibold mb-0" href="#!">Intel</a></td>
                          <td class="color align-middle white-space-nowrap fs-9 text-body"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
                          <td class="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">2</td>
                          <td class="price align-middle text-end text-body fw-semibold">$65</td>
                          <td class="price align-middle text-body-tertiary fs-9 text-end">Nov 21, 10:25 AM</td>
                          <td class="total align-middle fw-bold text-body-highlight text-end">
                            <div class="btn-reveal-trigger position-static"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10"></span></button>
                              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div class="col-auto d-flex">
                      <p class="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a class="fw-semibold" href="#!" data-list-view="*">View all<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a class="fw-semibold d-none" href="#!" data-list-view="less">View Less<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                    </div>
                    <div class="col-auto d-flex"><button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                      <ul class="mb-0 pagination"></ul><button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-between-center mb-5">
                  <div>
                    <h3 class="text-body-emphasis mb-2">My Favourite Stores</h3>
                    <h5 class="text-body-tertiary fw-semibold">Essential for a better life</h5>
                  </div><button class="btn btn-phoenix-primary">View all</button>
                </div>
                <div class="row gx-3 gy-5">
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/dell.png" alt="Dell Technologies" /></div>
                    <h5 class="mb-2">Dell Technologies</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(1263 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/hp.png" alt="HP Global Store" /></div>
                    <h5 class="mb-2">HP Global Store</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(365 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/honda.png" alt="Honda" /></div>
                    <h5 class="mb-2">Honda</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(596 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/asus-rog.png" alt="Asus ROG" /></div>
                    <h5 class="mb-2">Asus ROG</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(2365 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/yamaha.png" alt="Yamaha" /></div>
                    <h5 class="mb-2">Yamaha</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(1253 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/ibm.png" alt="IBM" /></div>
                    <h5 class="mb-2">IBM</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(996 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/apple-2.png" alt="Apple Store" /></div>
                    <h5 class="mb-2">Apple Store</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(365 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/oppo.png" alt="Oppo" /></div>
                    <h5 class="mb-2">Oppo</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(576 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/redragon.png" alt="Redragon" /></div>
                    <h5 class="mb-2">Redragon</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(1125 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/xbox.png" alt="Microsoft XBOX" /></div>
                    <h5 class="mb-2">Microsoft XBOX</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(830 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/lenovo.png" alt="Lenovo" /></div>
                    <h5 class="mb-2">Lenovo</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(1032 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                    <div class="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style="height:180px;"><img class="mw-100" src="/assets/img/brand2/xiaomi.png" alt="Xiaomi" /></div>
                    <h5 class="mb-2">Xiaomi</h5>
                    <div class="mb-1 fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
                    <p class="text-body-quaternary fs-9 mb-2 fw-semibold">(965 people rated)</p><a class="btn btn-link p-0" href="#!">Visit Store<span class="fas fa-chevron-right ms-1 fs-10"></span></a>
                    <div class="hover-actions top-0 end-0 mt-2 me-3">
                      <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-9"></span></button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <div class="row gx-3 gy-4 mb-5">
                  <div class="col-12 col-lg-6"><label class="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" for="fullName">Full name</label><input class="form-control" id="fullName" type="text" placeholder="Full name" /></div>
                  <div class="col-12 col-lg-6"><label class="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" for="gender">Gender</label><select class="form-select" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="not-to-say">Prefer not to say</option>
                    </select></div>
                  <div class="col-12 col-lg-6"><label class="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" for="email">Email</label><input class="form-control" id="email" type="text" placeholder="Email" /></div>
                  <div class="col-12 col-lg-6">
                    <div class="row g-2 gy-lg-0"><label class="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">Date of birth</label>
                      <div class="col-6 col-sm-2 col-lg-3 col-xl-2"><select class="form-select" id="date">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                        </select></div>
                      <div class="col-6 col-sm-2 col-lg-3 col-xl-2"><select class="form-select" id="month">
                          <option value="Jan">Jan</option>
                          <option value="Feb">Feb</option>
                          <option value="Mar">Mar</option>
                          <option value="Apr">Apr</option>
                          <option value="May">May</option>
                          <option value="Jun">Jun</option>
                          <option value="Jul">Jul</option>
                          <option value="Aug">Aug</option>
                          <option value="Sep">Sep</option>
                          <option value="Oct">Oct</option>
                          <option value="Nov">Nov</option>
                          <option value="Dec">Dec</option>
                        </select></div>
                      <div class="col-12 col-sm-8 col-lg-6 col-xl-8"><select class="form-select" id="year">
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
                  </div>
                  <div class="col-12 col-lg-6"><label class="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" for="phone">Phone</label><input class="form-control" id="phone" type="text" placeholder="+1234567890" /></div>
                  <div class="col-12 col-lg-6"><label class="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" for="alternative_phone">Alternative phone</label><input class="form-control" id="alternative_phone" type="text" placeholder="+1234567890" /></div>
                  <div class="col-12 col-lg-4"><label class="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" for="facebook">Facebook</label><input class="form-control" id="facebook" type="text" placeholder="Facebook" /></div>
                  <div class="col-12 col-lg-4"><label class="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" for="instagram">Instagram</label><input class="form-control" id="instagram" type="text" placeholder="Instagram" /></div>
                  <div class="col-12 col-lg-4"><label class="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" for="twitter">Twitter</label><input class="form-control" id="twitter" type="text" placeholder="Twitter" /></div>
                </div>
                <div class="text-end"><button class="btn btn-primary px-7">Save changes</button></div>
              </div>
            </div>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->`;

export default function Profile() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
