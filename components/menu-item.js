const scrollToTargetAdjusted = (menuId) => {
  var element = document.getElementById(menuId);

  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;
  var headerWidth = header.offsetWidth;
  var headerOffset = headerWidth > headerHeight ? headerHeight + 20 : 20;

  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  console.log(menuId);
};

const MenuItem = ({ menuId, children }) => {
  return (
    <div className="text-base lowercase px-3 lg:px-0 lg:py-3">
      <a onClick={() => scrollToTargetAdjusted(menuId)}>{children}</a>
    </div>
  );
};

export default MenuItem;
