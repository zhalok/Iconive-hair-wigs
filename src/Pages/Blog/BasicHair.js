import React from "react";
import banner from "../../.././src/Components/Images/Blog/blogbanner.png";

export default function BasicHair() {
  return (
    <div>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>

      {/* tabs */}
      <div className="mx-auto my-5 container">
        <div>
          <h2 className="fw-bold pt-5">Basic Hair Guide</h2>
        </div>
        <nav className="w-100 pt-5 d-flex ">
          <div
            class="nav nav-tabs w-100 d-flex justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active text-black"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Choosing the Right Wig
            </button>
            <button
              class="nav-link text-black"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Choosing The Right Colour
            </button>
            <button
              class="nav-link text-black"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Caring For your Wig
            </button>
          </div>
        </nav>
        {/* first tab */}
        <div
          class="tab-content border-start border-end border-bottom"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active  p-5"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="text-start">
              <h5 className="fw-bold">Consider Your Face Shape:</h5>
              <p className="text-gray pt-1 text-16">
                Different wigs suit different face shapes. For example, if you
                have a round face, a long, layered wig can help elongate your
                features. On the other hand, if you have a square face, a short,
                curly wig can soften your features.
              </p>

              <h5 className="fw-bold mt-5">Match your hair color:</h5>
              <p className="text-gray pt-1 text-16">
                If you're buying a wig to match your natural hair color, be sure
                to compare the color swatches to your hair color in natural
                light.
              </p>

              <h5 className="fw-bold mt-5">Think about the occasion:</h5>
              <p className="text-gray pt-1 text-16">
                Different wigs are suitable for different occasions. For
                example, a casual, messy bun wig might be perfect for a day out
                with friends, while a sleek, straight wig might be better for a
                job interview.
              </p>

              <h5 className="fw-bold mt-5">Try on different styles:</h5>
              <p className="text-gray pt-1 text-16">
                Don't be afraid to experiment with different styles and lengths
                to find what works best for you.
              </p>

              <h5 className="fw-bold mt-5">Wig base:</h5>
              <p className="text-gray pt-1 text-16">
                As mentioned earlier, there are different types of wig bases,
                such as capless, monofilament, lace front, full lace, skin base,
                and mix base. Consider your desired level of comfort, realism,
                and styling versatility when choosing a wig base.
              </p>

              <h5 className="fw-bold mt-5">Hair type:</h5>
              <p className="text-gray pt-1 text-16">
                Wigs can be made with human hair, synthetic hair, or a blend of
                both. Human hair wigs are more expensive but offer greater
                styling versatility and a more natural look. Synthetic wigs are
                more affordable and require less maintenance but may not look as
                natural.
              </p>

              <h5 className="fw-bold mt-5">Wig style:</h5>
              <p className="text-gray pt-1 text-16">
                There are different wig styles to choose from, such as short,
                medium, and long hair lengths, curly, wavy, or straight hair
                textures and different hair colors. Consider your personal style
                and what type of wig would suit you best.
              </p>

              <h5 className="fw-bold mt-5">Wig cap size:</h5>
              <p className="text-gray pt-1 text-16">
                Wigs come in different sizes, so be sure to measure your head to
                ensure a comfortable fit. You can also opt for a wig with
                adjustable straps or clips for a more secure fit.
              </p>

              <h5 className="fw-bold mt-5">Wig care:</h5>
              <p className="text-gray pt-1 text-16">
                Wigs require proper care to maintain their appearance and
                lifespan. Consider the level of maintenance you are willing to
                commit to, and whether you prefer a wig that requires minimal
                care or one that allows for greater styling options.
              </p>

              <h5 className="fw-bold mt-5">Budget:</h5>
              <p className="text-gray pt-1 text-16">
                Wigs can range in price from a few hundred to several thousand
                dollars. Consider your budget and what type of wig you can
                afford.
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade  p-5"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="text-start">
              <h5 className="fw-bold">Consider your skin tone:</h5>
              <p className="text-gray pt-1 text-16">
                Your skin tone plays a significant role in determining the right
                hair color for you. If you have warm undertones, consider shades
                of red, gold, or honey. If you have cool undertones, try shades
                of ash, platinum, or cool browns.
              </p>

              <h5 className="fw-bold mt-5">
                Take your natural hair color into account:
              </h5>
              <p className="text-gray pt-1 text-16">
                If you want to achieve a natural look, choose a wig color that
                is similar to your natural hair color. If you want to experiment
                with a new look, consider colors that complement your skin tone.
              </p>

              <h5 className="fw-bold mt-5">Consider the occasion:</h5>
              <p className="text-gray pt-1 text-16">
                Think about the occasion or setting where you will be wearing
                the wig. If it's for everyday wear, consider a natural-looking
                color that blends well with your skin tone. If it's for a
                special occasion or event, you may want to choose a more
                dramatic color to make a statement.
              </p>

              <h5 className="fw-bold mt-5">Try on different colors:</h5>
              <p className="text-gray pt-1 text-16">
                If possible, try on different wig colors to see which one looks
                best on you. Some wig shops may offer color swatches or samples
                that you can take home to see how they look in different
                lighting.
              </p>

              <h5 className="fw-bold mt-5">Consult with a wig specialist:</h5>
              <p className="text-gray pt-1 text-16">
                If you're unsure about which color to choose, consult with a wig
                specialist. They can provide recommendations based on your skin
                tone, natural hair color, and personal preferences.
              </p>

              <p className="fw-bold pt-4 text-gray text-16">
                Remember that the right color can enhance your natural beauty
                and boost your confidence. With these tips, you can choose the
                perfect color for your wig and enjoy a stunning and
                natural-looking hairstyle.
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade p-5"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="text-start ">
              <h5 className="fw-bold">Wash your wig regularly:</h5>
              <p className="text-gray pt-1 text-16">
                Depending on how often you wear your wig, you may need to wash
                it every 6-8 wears. Use a wig shampoo and conditioner to keep it
                clean and soft.
              </p>

              <h5 className="fw-bold mt-5">Store your wig properly:</h5>
              <p className="text-gray pt-1 text-16">
                When you're not wearing your wig, store it on a wig stand or
                mannequin to help maintain its shape.
              </p>

              <h5 className="fw-bold mt-5">Brush it regularly:</h5>
              <p className="text-gray pt-1 text-16">
                Use a wig brush or wide-tooth comb to gently brush your wig,
                starting at the ends and working your way up to the roots.
              </p>

              <h5 className="fw-bold mt-5">Avoid heat:</h5>
              <p className="text-gray pt-1 text-16">
                Most synthetic wigs cannot be heat-styled, so avoid using hot
                styling tools like curling irons or straighteners. Instead, use
                cool water to set your style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
