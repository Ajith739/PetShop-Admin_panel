import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<div class="pb-9">
          <div class="card mb-5">
            <div class="card-header d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0" style="min-height: 214px; ">
              <div class="hover-actions-trigger position-static">
                <div class="bg-holder rounded-top" style="background-image:url(/assets/img/generic/cover-photo.png);"></div><input class="d-none" id="upload-cover-image" type="file" /><label class="cover-image-file-input" for="upload-cover-image"></label>
                <div class="hover-actions end-0 bottom-0 pe-1 pb-2 text-white"><span class="fa-solid fa-camera me-2 overlay-icon"></span></div>
                <!--/.bg-holder-->
              </div><input class="d-none" id="upload-porfile-picture" type="file" />
              <div class="hoverbox feed-profile" style="width: 150px; height: 150px">
                <div class="hoverbox-content rounded-circle d-flex flex-center z-1" style="--phoenix-bg-opacity: .56;"><span class="fa-solid fa-camera fs-3 text-secondary-light"></span></div>
                <div class="position-relative bg-body-quaternary rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
                  <div class="avatar avatar-5xl"><img class="rounded-circle rounded-circle img-thumbnail shadow-sm border-0" src="/assets/img/team/9.webp" alt="" /></div><label class="w-100 h-100 position-absolute z-1" for="upload-porfile-picture"></label>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row justify-content-xl-between">
                <div class="col-auto">
                  <div class="d-flex flex-wrap mb-3 align-items-center">
                    <h2 class="me-2">Erza Bridgest</h2><span class="fw-semibold fs-7 text-body-emphasis">u/hansolo</span>
                  </div>
                  <div class="mb-5">
                    <div class="d-md-flex align-items-center">
                      <div class="d-flex align-items-center"><span class="fa-solid fa-user-group fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2"></span><a class="text-body-emphasis" href="#!"><span class="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">1297 <span class="fw-semibold ms-1 me-4">Followers</span></span></a></div>
                      <div class="d-flex align-items-center"><span class="fa-solid fa-user-check fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2"></span><a class="text-body-emphasis" href="#!"><span class="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">3971 <span class="fw-semibold ms-1 me-4">Following</span></span></a></div>
                      <div class="d-flex align-items-center"><span class="fa-solid fa-location-dot fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2"></span><a class="text-body-emphasis" href="#!"><span class="fs-7 fw-semibold text-body-tertiary text-opacity-85 text-body-emphasis-hover">Vancouver, Lothal</span></a></div>
                    </div>
                  </div>
                  <p class="fs-6 text-body-secondary">“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”</p>
                </div>
                <div class="col-auto">
                  <div class="row g-2">
                    <div class="col-auto order-xxl-2"><button class="btn btn-primary lh-1"><span class="fa-solid fa-user-plus me-2"></span>Follow Request</button></div>
                    <div class="col-auto order-xxl-1"><button class="btn btn-phoenix-primary lh-1"><span class="fa-solid fa-message me-2"></span>Send Message</button></div>
                    <div class="col-auto">
                      <div class="position-static"><button class="btn btn-phoenix-secondary lh-1" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-chevron-down me-2"></span> More</button>
                        <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-user-group text-body-secondary me-2"></span><span>Followers</span></a><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-users text-body-secondary me-2"></span><span>Communities</span></a><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-photo-film text-body-secondary me-2"></span><span>Media Files</span></a><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-calendar-days fs-8 text-body-secondary me-2"></span><span> Events</span></a><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-dice text-body-secondary me-2"></span><span>Games</span></a><a class="dropdown-item d-xl-none" href="#!"><span class="fa-solid fa-user-gear text-body-secondary me-2"></span><span>Settings</span></a><a class="dropdown-item" href="#!"><span class="fa-solid fa-bell-slash text-body-secondary me-2"></span><span>Mute Conversation</span></a><a class="dropdown-item" href="#!"><span class="fa-solid fa-gear text-body-secondary me-2"></span><span>Manage Settings</span></a><a class="dropdown-item" href="#!"><span class="fa-solid fa-hand-holding-heart text-body-secondary me-2"></span><span>Get help</span></a><a class="dropdown-item" href="#!"><span class="fa-solid fa-flag text-body-secondary me-2"></span><span>Report Account</span></a><a class="dropdown-item" href="#!"><span class="fa-solid fa-ban text-body-secondary me-2"></span><span>Block Account</span></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gy-3 gx-5 gx-xxl-6">
            <div class="col-xl-4 d-none d-xl-block">
              <div class="mb-8">
                <div class="row g-0">
                  <div class="col-6 border-1 border-bottom border-translucent border-end py-2"> <a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-user-group me-2 mb-2 mb-xxl-0"></span>Followers</a></div>
                  <div class="col-6 border-1 border-bottom border-translucent py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-users me-2 mb-2 mb-xxl-0"></span>Communities</a></div>
                  <div class="col-6 border-1 border-bottom border-translucent border-end py-2"><a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0"></span>Media Files</a></div>
                  <div class="col-6 border-1 border-bottom border-translucent py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0"></span>Events</a></div>
                  <div class="col-6 border-1 border-end border-translucent py-2"><a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-dice me-2 mb-2 mb-xxl-0"></span>Games</a></div>
                  <div class="col-6 border-1 py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0"></span>Settings </a></div>
                </div>
              </div>
              <div class="mb-8">
                <div class="d-flex pb-4 align-items-end">
                  <h3 class="flex-1 mb-0">Photos</h3><a class="fw-bold fs-9 me-4" href="#!">Albums</a><a class="fw-bold fs-9" href="#!">See all</a>
                </div>
                <div class="row g-3">
                  <div class="col-4"><a href="/assets/img/gallery/11.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/11.png" alt="" /></a></div>
                  <div class="col-4"><a href="/assets/img/gallery/12.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/12.png" alt="" /></a></div>
                  <div class="col-4"><a href="/assets/img/gallery/13.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/13.png" alt="" /></a></div>
                  <div class="col-4"><a href="/assets/img/gallery/14.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/14.png" alt="" /></a></div>
                  <div class="col-4"><a href="/assets/img/gallery/15.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/15.png" alt="" /></a></div>
                  <div class="col-4"><a href="/assets/img/gallery/16.png" data-gallery="gallery-photos"><img class="w-100 rounded-3" src="/assets/img/gallery/16.png" alt="" /></a></div>
                </div>
              </div>
              <div class="d-flex pb-4 align-items-end border-bottom border-translucent border-dashed">
                <h3 class="flex-1 mb-0">You and Erza</h3><a class="fw-bold fs-9" href="#!">See details</a>
              </div>
              <div class="row g-0 mb-5 mb-lg-0">
                <div class="col-12 border-1 border-bottom border-translucent py-2"><a class="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex" href="#!"><span class="fa-solid fa-user-group me-2 mb-2 mb-xxl-0"></span>432 Common Followers</a></div>
                <div class="col-12 border-1 border-bottom border-translucent py-2"><a class="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex" href="#!"><span class="fa-solid fa-users me-2 mb-2 mb-xxl-0"></span>21 Communities</a></div>
                <div class="col-12 border-1 border-bottom border-translucent py-2"><a class="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex" href="#!"><span class="fa-solid fa-tags me-2 mb-2 mb-xxl-0"></span>12 Tagged Images</a></div>
                <div class="col-12 border-1 border-bottom border-translucent py-2"><a class="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex" href="#!"><span class="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0"></span>3 Common Events</a></div>
                <div class="col-12 border-1 border-bottom border-translucent py-2"><a class="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex" href="#!"><span class="fa-solid fa-location-dot me-2 mb-2 mb-xxl-0"></span>45 Common Check-ins</a></div>
              </div>
            </div>
            <div class="col-12 col-xl-8">
              <div class="mb-9">
                <div class="mb-5">
                  <div class="card mb-4">
                    <div class="card-body p-3 p-sm-4">
                      <div class="border-bottom border-translucent mb-3">
                        <div class="d-flex align-items-center mb-3"><a href="profile">
                            <div class="avatar avatar-xl  me-2">
                              <img class="rounded-circle " src="/assets/img/team/9.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Erza Bridgest</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">35 mins ago<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span>Mustafar, British Columbia<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span><span class="fa-solid fa-earth-americas text-body"></span></p>
                          </div>
                          <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                          </div>
                        </div>
                        <p class="text-body-secondary">Melancholy is sadness that has taken on lightness.</p>
                        <div class="row g-1 mb-5">
                          <div class="col-3"><a href="/assets/img/gallery/22.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/22.png" alt="..." /></a></div>
                          <div class="col-3"><a href="/assets/img/gallery/23.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/23.png" alt="..." /></a></div>
                          <div class="col-6"><a href="/assets/img/gallery/24.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/24.png" alt="..." /></a></div>
                        </div>
                      </div>
                      <div class="d-flex"><button class="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button"><span class="fa-solid fa-heart me-1"></span>345 Likes</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button"><span class="fa-solid fa-comment me-1"></span>45 Comments</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>56 shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-start"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/30.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1">
                          <div class="d-flex align-items-center"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Mamur Fechetti</a><span class="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">35 mins ago</span></div>
                          <p class="mb-0">How long did it take to create this? It appears that you quickly produced the second one.</p><button class="btn btn-link p-0 text-body fw-bolder mb-2" type="button"><span class="fa-solid fa-reply fs-10 me-1"></span><span class="fw-bold fs-10">Reply</span></button>
                          <div class="d-flex align-items-start mb-3"><a href="profile">
                              <div class="avatar avatar-m  me-2">
                                <img class="rounded-circle " src="/assets/img/team/62.webp" alt="" />
                              </div>
                            </a>
                            <div class="flex-1">
                              <div class="d-flex align-items-center"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a><span class="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">5 mins ago</span></div>
                              <p class="mb-0">I am so clever that sometimes I don't understand a single word of what I am saying.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/9.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1"><input class="form-control" type="text" placeholder="Add comment" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <div class="card mb-4">
                    <div class="card-body p-3 p-sm-4">
                      <div class="border-bottom border-translucent mb-3">
                        <div class="d-flex align-items-center mb-3"><a href="profile">
                            <div class="avatar avatar-xl  me-2">
                              <img class="rounded-circle " src="/assets/img/team/9.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Erza Bridgest</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">3 days ago<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span>Lothal, USA<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span><span class="fa-solid fa-earth-americas text-body"></span></p>
                          </div>
                          <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                          </div>
                        </div>
                        <p class="text-body-secondary">A guy enters a bakery while carrying a 25-pound haddock.
                          He asks the baker if he makes fish cakes. The rather perplexed baker responds in the negative.
                          The guy responds &quot;That's unfortunate.Today is his birthday&quot;</p>
                      </div>
                      <div class="d-flex"><button class="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button"><span class="fa-solid fa-heart me-1"></span>23 Likes</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button"><span class="fa-solid fa-comment me-1"></span>9 Comments</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>3 shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-center"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/20.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1"><input class="form-control" type="text" placeholder="Add comment" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <div class="card mb-4">
                    <div class="card-body p-3 p-sm-4">
                      <div class="border-bottom border-translucent mb-3">
                        <div class="d-flex align-items-center mb-3"><a href="profile">
                            <div class="avatar avatar-xl  me-2">
                              <img class="rounded-circle " src="/assets/img/team/9.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">35 mins ago<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span>Consett, UK<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span><span class="fa-solid fa-earth-americas text-body"></span></p>
                          </div>
                          <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                          </div>
                        </div>
                        <p class="text-body-secondary">Fear can hold you prisoner. Hope can set you free. - King</p>
                        <div class="row g-1 mb-5">
                          <div class="col-3"><a href="/assets/img/gallery/25.png" data-gallery="gallery-posts-2"><img class="rounded h-100 w-100" src="/assets/img/gallery/25.png" alt="..." /></a></div>
                          <div class="col-3"><a href="/assets/img/gallery/26.png" data-gallery="gallery-posts-2"><img class="rounded h-100 w-100" src="/assets/img/gallery/26.png" alt="..." /></a></div>
                        </div>
                      </div>
                      <div class="d-flex"><button class="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button"><span class="fa-solid fa-heart me-1"></span>345 Likes</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button"><span class="fa-solid fa-comment me-1"></span>45 Comments</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>56 shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-start"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/14.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1">
                          <div class="d-flex align-items-center"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Sutanuka Gomez</a><span class="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">35 mins ago</span></div>
                          <p class="mb-0">Time is the best teacher; Unfortunately it kills all its students!</p><button class="btn btn-link p-0 text-body fw-bolder mb-2" type="button"><span class="fa-solid fa-reply fs-10 me-1"></span><span class="fw-bold fs-10">Reply</span></button>
                          <div class="d-flex align-items-start mb-3"><a href="profile">
                              <div class="avatar avatar-m  me-2">
                                <img class="rounded-circle " src="/assets/img/team/27.webp" alt="" />
                              </div>
                            </a>
                            <div class="flex-1">
                              <div class="d-flex align-items-center"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a><span class="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">5 mins ago</span></div>
                              <p class="mb-0">If you’re too open-minded, your brains will fall out.!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/14.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1"><input class="form-control" type="text" placeholder="Add comment" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center"><a class="btn btn-link fs-8 p-0" href="#!">Load more</a></div>
            </div>
          </div>
        </div>
        <div class="navbar-bottom d-xl-none">
          <div class="nav"><a class="nav-link" aria-current="page" href="feed"><span class="fa-solid fa-home nav-icon"></span><span class="nav-label">Home</span></a><a class="nav-link active" href="profile"><span class="fa-solid fa-user nav-icon"></span><span class="nav-label">Profile</span></a><a class="nav-link" href="#!"><span class="fa-solid fa-image nav-icon"></span><span class="nav-label">Photos</span></a><a class="nav-link" href="../chat"><span class="fa-solid fa-message nav-icon"></span><span class="nav-label">Messages</span></a><a class="nav-link" href="../events/event-detail"><span class="fa-solid fa-calendar-days nav-icon"></span><span class="nav-label">Events</span></a></div>
        </div>
        <footer class="footer d-none d-xl-block position-absolute">
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
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="../../pages/members">
                          <div class="avatar avatar-l status-online  me-2 text-body">
                            <img class="rounded-circle " src="/assets/img/team/40x40/10.webp" alt="" />
                          </div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">Carry Anna</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="../../pages/members">
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
            </div>
          </div>
        </div>
      </div>
      <div class="support-chat-container support-chat-bottom-lg">
        <div class="container-fluid support-chat">
          <div class="card bg-body-emphasis">
            <div class="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
              <h5 class="mb-0 d-flex align-items-center gap-2">Demo widget<span class="fa-solid fa-circle text-success fs-11"></span></h5>
              <div class="btn-reveal-trigger"><button class="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h text-body"></span></button>
                <div class="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown"><a class="dropdown-item" href="#!">Request a callback</a><a class="dropdown-item" href="#!">Search in chat</a><a class="dropdown-item" href="#!">Show history</a><a class="dropdown-item" href="#!">Report to Admin</a><a class="dropdown-item btn-support-chat" href="#!">Close Support</a></div>
              </div>
            </div>
            <div class="card-body chat p-0">
              <div class="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div class="text-end mt-6"><a class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p class="mb-0 fw-semibold fs-9">I need help with something</p><span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                  </a><a class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p class="mb-0 fw-semibold fs-9">I can’t reorder a product I previously ordered</p><span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                  </a><a class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p class="mb-0 fw-semibold fs-9">How do I place an order?</p><span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                  </a><a class="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p class="mb-0 fw-semibold fs-9">My payment method not working</p><span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                  </a></div>
                <div class="text-center mt-auto">
                  <div class="avatar avatar-3xl status-online"><img class="rounded-circle border border-3 border-light-subtle" src="/assets/img/team/30.webp" alt="" /></div>
                  <h5 class="mt-2 mb-3">Eric</h5>
                  <p class="text-center text-body-emphasis mb-0">Ask us anything – we’ll get back to you here or by email within 24 hours.</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
              <div class="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4"><input class="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" /><label class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" for="supportChatPhotos"><span class="fa-solid fa-image"></span></label><input class="d-none" type="file" accept="image/*" id="supportChatPhotos" /><label class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" for="supportChatAttachment"> <span class="fa-solid fa-paperclip"></span></label><input class="d-none" type="file" id="supportChatAttachment" /></div><button class="btn p-0 border-0 send-btn"><span class="fa-solid fa-paper-plane fs-9"></span></button>
            </div>
          </div>
        </div><button class="btn btn-support-chat p-0 border border-translucent"><span class="fs-8 btn-text text-primary text-nowrap">Chat demo</span><span class="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative"><span class="ping-icon-bg"></span><span class="fa-solid fa-circle ping-icon"></span></span><span class="fa-solid fa-headset text-primary fs-8 d-sm-none"></span><span class="fa-solid fa-chevron-down text-primary fs-7"></span></button>
      `;

export default function SocialProfile() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
