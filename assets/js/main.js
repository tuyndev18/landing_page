const IMAGE_TAB_FIRST = [
  "./assets/images/item1_1.png",
  "./assets/images/item1_2.png",
  "./assets/images/item1_3.png",
  "./assets/images/item1_4.png",
  "./assets/images/item1_5.png",
  "./assets/images/item1_6.png",
  "./assets/images/item1_7.png",
  "./assets/images/item1_8.png",
  "./assets/images/item1_9.png",
  "./assets/images/item1_10.png",
  "./assets/images/item1_11.png",
  "./assets/images/item1_12.png",
  "./assets/images/item1_13.png",
  "./assets/images/item1_14.png",
  "./assets/images/item1_15.png",
]

const IMAGE_TAB_SECOND = [
  "./assets/images/item2_1.png",
  "./assets/images/item2_2.png",
  "./assets/images/item2_3.png",
  "./assets/images/item2_4.png",
  "./assets/images/item2_5.png",
  "./assets/images/item2_6.png",
  "./assets/images/item2_7.png",
  "./assets/images/item2_8.png",
  "./assets/images/item2_9.png",
  "./assets/images/item2_10.png",
  "./assets/images/item2_11.png",
  "./assets/images/item2_12.png",
  "./assets/images/item2_13.png",
  "./assets/images/item2_14.png",
  "./assets/images/item2_15.png",
]

const IMAGE_TAB_THIRD = [
  "./assets/images/item3_1.png",
  "./assets/images/item3_2.png",
  "./assets/images/item3_3.png",
  "./assets/images/item3_4.png",
  "./assets/images/item3_5.png",
  "./assets/images/item3_6.png",
  "./assets/images/item3_7.png",
  "./assets/images/item3_8.png",
  "./assets/images/item3_9.png",
  "./assets/images/item3_10.png",
  "./assets/images/item3_11.png",
  "./assets/images/item3_12.png",
  "./assets/images/item3_13.png",
  "./assets/images/item3_14.png",
  "./assets/images/item3_15.png",
]

const IMAGE_TAB = [
  IMAGE_TAB_FIRST,
  IMAGE_TAB_SECOND,
  IMAGE_TAB_THIRD
]

let CURRENT_TAB_ACTIVE = 0;
let TIME_OUT_CURRENT = null;

function fillImageTabAnimation(activeTabIndex) {
  const tabAnimationFront = document.querySelectorAll(".tab_animation_front")
  const tabAnimationBack = document.querySelectorAll(".tab_animation_back")
  tabAnimationFront.forEach((tabAnimationFrontElement, index) => {
    tabAnimationFrontElement.src = IMAGE_TAB[CURRENT_TAB_ACTIVE][index]
  })
  tabAnimationBack.forEach((tabAnimationBackElement, index) => {
    tabAnimationBackElement.src = IMAGE_TAB[activeTabIndex][index]
  })
}

function fillImageTabActive(activeTabIndex) {
  const tabAnimationFront = document.querySelectorAll(".tab_animation_front")
  tabAnimationFront.forEach((tabAnimationFrontElement, index) => {
    tabAnimationFrontElement.src = IMAGE_TAB[activeTabIndex][index]
  })
}

function addStyleButtonActive(activeTabIndex) {
  const actionTab = document.querySelectorAll(".action_tab")
  actionTab.forEach((actionTabElement, index) => {
    if (activeTabIndex === index) {
      actionTabElement.classList.add("btn_active")
      return
    }
    actionTabElement.classList.remove("btn_active")
  })
}

function addOrRemoveAnimationTab(action) {
  let timeDelay = 0;
  const boardCard = document.querySelectorAll(".board_card")
  boardCard.forEach((boardCardElement) => {
    if (action === "remove") {
      boardCardElement.classList.remove("flip_board_card")
      return
    }
    setTimeout(() => {
      boardCardElement.classList.add("flip_board_card")
    }, timeDelay);
    timeDelay += 80;
  })
}

const actionTab = document.querySelectorAll(".action_tab")
actionTab.forEach((actionTabElement, index) => {
  actionTabElement.addEventListener('click', function () {
    if (index === CURRENT_TAB_ACTIVE) {
      return
    }
    if (TIME_OUT_CURRENT) {
      addOrRemoveAnimationTab("remove")
      clearTimeout(TIME_OUT_CURRENT)
      TIME_OUT_CURRENT = null
    }
    CURRENT_TAB_ACTIVE = index;
    addStyleButtonActive(index)
    fillImageTabAnimation(index)
    addOrRemoveAnimationTab("add")
    TIME_OUT_CURRENT = setTimeout(() => {
      fillImageTabActive(index)
      addOrRemoveAnimationTab("remove")
      TIME_OUT_CURRENT = null
    }, 2100);
  })
})
