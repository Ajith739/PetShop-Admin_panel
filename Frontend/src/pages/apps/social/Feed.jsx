import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<div class="pb-10">
          <div class="row gy-3 gx-5 gx-xxl-6">
            <div class="col-lg-5 col-xl-4 d-none d-lg-block">
              <div class="card mb-5">
                <div class="card-header hover-actions-trigger position-relative mb-7" style="min-height: 130px; ">
                  <div class="bg-holder rounded-top" style="background-image: linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(/assets/img/generic/59.png)"><input class="d-none" id="upload-feed-cover-image" type="file" /><label class="cover-image-file-input" for="upload-feed-cover-image"></label>
                    <div class="hover-actions end-0 bottom-0 pe-1 pb-2 text-white dark__text-gray-1100"><span class="fa-solid fa-camera me-2 overlay-icon"> </span></div>
                  </div><input class="d-none" id="upload-feed-porfile-picture" type="file" /><label class="avatar avatar-4xl status-online feed-avatar-profile cursor-pointer" for="upload-feed-porfile-picture"><img class="rounded-circle img-thumbnail shadow-sm border-0" src="/assets/img/team/59.webp" width="200" alt="" /></label>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex flex-wrap mb-3 align-items-center">
                        <h3 class="me-2">Ansolo Lazinatov</h3><span class="fw-normal fs-8">u/hansolo</span>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <div class="d-flex me-4 mb-2"><span class="fa-solid fa-user-group fs-10 me-2 me-lg-1 me-xl-2"></span>
                            <h6 class="d-inline-block mb-0">1297 <span class="fw-semibold">Followers</span></h6>
                          </div>
                          <div class="d-flex mb-2"><span class="fa-solid fa-user-check fs-10 me-2 me-lg-1 me-xl-2"></span>
                            <h6 class="d-block d-xl-inline-block mb-0"> 3971 <span class="fw-semibold">Following</span></h6>
                          </div>
                        </div>
                      </div>
                      <p class="fw-semibold mb-0">About me<a href="#!"><span class="fa-solid fa-pencil fs-10 text-body-quaternary ms-3"></span></a></p>
                      <p class="text-body-tertiary mb-0">“Le capitalisme exploite. Et le capitalisme exploite les gens de couleur. Comme il exploite les hommes. Ou comme il exploite les femmes.” </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-0">
                <div class="col-6 border-1 border-bottom border-translucent border-end py-2"> <a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-user-group me-2 mb-2 mb-xxl-0"></span>Followers</a></div>
                <div class="col-6 border-1 border-bottom border-translucent py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-users me-2 mb-2 mb-xxl-0"></span>Communities</a></div>
                <div class="col-6 border-1 border-bottom border-translucent border-end py-2"><a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0"></span>Media Files</a></div>
                <div class="col-6 border-1 border-bottom border-translucent py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0"></span>Events</a></div>
                <div class="col-6 border-1 border-end border-translucent py-2"><a class="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-dice me-2 mb-2 mb-xxl-0"></span>Games</a></div>
                <div class="col-6 border-1 py-2"><a class="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block" href="#!"><span class="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0"></span>Settings </a></div>
              </div>
              <div class="mb-8 mt-6">
                <div class="d-flex flex-between-center pb-3 border-bottom border-translucent border-dashed">
                  <h3 class="mb-0">Messages<span class="text-body-tertiary ms-2 fw-normal">(97)</span></h3>
                  <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                    <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                  </div>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
                  <div class="me-2">
                    <div class="avatar avatar-m status-online ">
                      <img class="rounded-circle " src="/assets/img/team/35.webp" alt="" />
                    </div>
                  </div><a class="text-decoration-none flex-1" href="../chat">
                    <h5>Stanly Drinkwater</h5>
                    <p class="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">When you gonna pay me back, don’t leave me hanging</p>
                  </a>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
                  <div class="me-2">
                    <div class="avatar avatar-m status-online ">
                      <img class="rounded-circle " src="/assets/img/team/30.webp" alt="" />
                    </div>
                  </div><a class="text-decoration-none flex-1" href="../chat">
                    <h5>Milind Mikuja</h5>
                    <p class="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">But the mare fact that she said that makes</p>
                  </a>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
                  <div class="me-2">
                    <div class="avatar avatar-m status-online ">
                      <img class="rounded-circle avatar-placeholder" src="/assets/img/team/avatar.webp" alt="" />
                    </div>
                  </div><a class="text-decoration-none flex-1" href="../chat">
                    <h5>Josef Stravinsky</h5>
                    <p class="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">Oi Cult.</p>
                  </a>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
                  <div class="me-2">
                    <div class="avatar avatar-m status-online ">
                      <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
                    </div>
                  </div><a class="text-decoration-none flex-1" href="../chat">
                    <h5>Martina scorcese</h5>
                    <p class="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">Thanks for that. Sincerely.</p>
                  </a>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
                  <div class="me-2">
                    <div class="avatar avatar-m status-online ">
                      <img class="rounded-circle " src="/assets/img/team/57.webp" alt="" />
                    </div>
                  </div><a class="text-decoration-none flex-1" href="../chat">
                    <h5>Meekona Zikon</h5>
                    <p class="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">I am Outside, Come here, Lets smoke...</p>
                  </a>
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
              <div class="d-flex pb-4 border-bottom border-dashed align-items-end">
                <h3 class="flex-1 mb-0">Events</h3><a class="fw-bold fs-9" href="#!">See more</a>
              </div>
              <div class="py-3 border-bottom border-translucent border-dashed">
                <div class="d-flex flex-between-center">
                  <p class="text-warning fs-10 mb-0 fw-bold mb-1">MON, FEB 21- MARCH 23</p>
                  <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                    <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                  </div>
                </div><a class="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base" href="#!">Master Class on FILM Studies THESIS on Makers</a>
                <p class="text-body-secondary fs-9 mb-2">Organized by <br /><a class="fw-bold text-primary" href="#!">IAFM- International Academy of Film and Media</a></p>
                <p class="fs-10 text-body-tertiary text-opacity-85">64 people going</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-1"><span class="fa-solid fa-clock text-body-secondary me-1"></span>12.30PM - 10PM</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-0"><span class="fa-solid fa-map-marker-alt text-body-secondary me-1"></span>Tavern on the Greend, New York</p>
              </div>
              <div class="py-3 border-bottom border-translucent border-dashed">
                <div class="d-flex flex-between-center">
                  <p class="text-warning fs-10 mb-0 fw-bold mb-1">MON, FEB 21- MARCH 23</p>
                  <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                    <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                  </div>
                </div><a class="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base" href="#!">Master Class on FILM Studies 'ANALYSIS of Cinema'</a>
                <p class="text-body-secondary fs-9 mb-2">Organized by <br /><a class="fw-bold text-primary" href="#!">IAFM- International Academy of Film and Media</a></p>
                <p class="fs-10 text-body-tertiary text-opacity-85">64 people going</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-1"><span class="fa-solid fa-clock text-body-secondary me-1"></span>12.30PM - 10PM</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-0"><span class="fa-solid fa-map-marker-alt text-body-secondary me-1"></span>Tavern on the Greend, New York</p>
              </div>
              <div class="py-3 border-bottom border-translucent border-dashed">
                <div class="d-flex flex-between-center">
                  <p class="text-warning fs-10 mb-0 fw-bold mb-1">MON, FEB 21- MARCH 23</p>
                  <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                    <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                  </div>
                </div><a class="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base" href="#!">Witnessing History in Making Photographs</a>
                <p class="text-body-secondary fs-9 mb-2">Organized by <br /><a class="fw-bold text-primary" href="#!">IAFM- International Academy of Film and Media</a></p>
                <p class="fs-10 text-body-tertiary text-opacity-85">64 people going</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-1"><span class="fa-solid fa-clock text-body-secondary me-1"></span>12.30PM - 10PM</p>
                <p class="fs-9 text-body-tertiary fw-bold mb-0"><span class="fa-solid fa-map-marker-alt text-body-secondary me-1"></span>Tavern on the Greend, New York</p>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              <div class="card d-flex flex-column mb-5"><textarea class="form-control border-translucent rounded-bottom-0 border-0 flex-1 fs-8" rows="7" placeholder="Write something..."></textarea>
                <div class="card-footer p-3">
                  <div class="d-flex justify-content-between align-items-center"><button class="btn p-0 me-3"><span class="fa-solid fa-image fs-8"></span></button>
                    <button class="btn p-0 me-3"><span class="fa-solid fa-calendar-alt fs-8"></span></button>
                    <button class="btn p-0 me-3"><span class="fa-solid fa-map-marker-alt fs-8"></span></button>
                    <button class="btn p-0 me-3"><span class="fa-solid fa-tag fs-8"></span></button>
                    <div class="dropdown me-3 d-inline-block flex-1"><button class="btn p-0 dropdown-toggle dropdown-caret-none d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span class="fa-solid fa-globe-asia fs-8 me-1"></span><span class="me-1 lh-base d-none d-sm-block">Public</span><span class="fa-solid fa-caret-down fs-10 text-body-quaternary"></span></button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Public</a></li>
                        <li><a class="dropdown-item" href="#">Private</a></li>
                        <li><a class="dropdown-item" href="#">Draft</a></li>
                      </ul>
                    </div>
                    <div class="d-flex align-items-center"><button class="btn btn-primary btn-sm px-6 px-sm-8">Post</button></div>
                  </div>
                </div>
              </div>
              <div class="mb-9">
                <div class="mb-5">
                  <div class="card mb-4">
                    <div class="card-body p-3 p-sm-4">
                      <div class="border-bottom border-translucent mb-3">
                        <div class="d-flex align-items-center mb-3"><a href="profile">
                            <div class="avatar avatar-xl  me-2">
                              <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">35 mins ago<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span>Consett, UK<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span><span class="fa-solid fa-earth-americas text-body"></span></p>
                          </div>
                          <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                          </div>
                        </div>
                        <p class="text-body-secondary">Some paintings I love</p>
                        <div class="row g-1 mb-5">
                          <div class="col-3"><a href="/assets/img/gallery/17.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/17.png" alt="..." /></a></div>
                          <div class="col-3"><a href="/assets/img/gallery/18.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/18.png" alt="..." /></a></div>
                          <div class="col-6"><a href="/assets/img/gallery/19.png" data-gallery="gallery-posts-0"><img class="rounded h-100 w-100" src="/assets/img/gallery/19.png" alt="..." /></a></div>
                        </div>
                      </div>
                      <div class="d-flex"><button class="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button"><span class="fa-solid fa-heart me-1"></span>345 Likes</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button"><span class="fa-solid fa-comment me-1"></span>45 Comments</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>56 Shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-start"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/23.webp" alt="" />
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
                            <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
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
                              <img class="rounded-circle " src="/assets/img/team/30.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">35 mins ago</p>
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
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>3 Shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-center"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/61.webp" alt="" />
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
                              <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
                            </div>
                          </a>
                          <div class="flex-1"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Zingko Kudobum</a>
                            <p class="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">35 mins ago<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span>Consett, UK<span class="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform="shrink-10 down-2"></span><span class="fa-solid fa-earth-americas text-body"></span></p>
                          </div>
                          <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                            <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                          </div>
                        </div>
                        <p class="text-body-secondary">Some paintings I love</p>
                        <div class="row g-1 mb-5">
                          <div class="col-3"><a href="/assets/img/gallery/20.png" data-gallery="gallery-posts-2"><img class="rounded h-100 w-100" src="/assets/img/gallery/20.png" alt="..." /></a></div>
                          <div class="col-3"><a href="/assets/img/gallery/21.png" data-gallery="gallery-posts-2"><img class="rounded h-100 w-100" src="/assets/img/gallery/21.png" alt="..." /></a></div>
                        </div>
                      </div>
                      <div class="d-flex"><button class="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button"><span class="fa-solid fa-heart me-1"></span>345 Likes</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button"><span class="fa-solid fa-comment me-1"></span>45 Comments</button>
                        <button class="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button"><span class="fa-solid fa-share me-1"></span>56 Shares</button>
                      </div>
                    </div>
                    <div class="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                      <div class="d-flex align-items-start"><a href="profile">
                          <div class="avatar avatar-m  me-2">
                            <img class="rounded-circle " src="/assets/img/team/23.webp" alt="" />
                          </div>
                        </a>
                        <div class="flex-1">
                          <div class="d-flex align-items-center"><a class="fw-bold mb-0 text-body-emphasis" href="profile">Mamur Fechetti</a><span class="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">35 mins ago</span></div>
                          <p class="mb-0">Time is the best teacher; Unfortunately it kills all its students!</p><button class="btn btn-link p-0 text-body fw-bolder mb-2" type="button"><span class="fa-solid fa-reply fs-10 me-1"></span><span class="fw-bold fs-10">Reply</span></button>
                          <div class="d-flex align-items-start mb-3"><a href="profile">
                              <div class="avatar avatar-m  me-2">
                                <img class="rounded-circle " src="/assets/img/team/62.webp" alt="" />
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
                            <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
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
        <div class="navbar-bottom d-lg-none">
          <div class="nav"><a class="nav-link active" aria-current="page" href="feed"><span class="fa-solid fa-home nav-icon"></span><span class="nav-label">Home</span></a><a class="nav-link" href="profile"><span class="fa-solid fa-user nav-icon"></span><span class="nav-label">Profile</span></a><a class="nav-link" href="#!"><span class="fa-solid fa-image nav-icon"></span><span class="nav-label">Photos</span></a><a class="nav-link" href="../chat"><span class="fa-solid fa-message nav-icon"></span><span class="nav-label">Messages</span></a><a class="nav-link" href="../events/event-detail"><span class="fa-solid fa-calendar-days nav-icon"></span><span class="nav-label">Events</span></a></div>
        </div>
        <footer class="footer d-none d-lg-block position-absolute">
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

export default function Feed() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
