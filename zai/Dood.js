import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    style={{
      marginTop: -5,
      marginLeft: 30,
    }}
    width={402}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#282C33" d="M.5.5h401v36H.5z" />
    <path fill="#C778DD" stroke="#C778DD" d="M8.5 11h15v15h-15z" />
    <path
      d="M39.728 12.736c.747 0 1.376.099 1.888.296.517.192.997.47 1.44.832l-.968 1.152a3.416 3.416 0 0 0-1.064-.616 3.612 3.612 0 0 0-1.208-.2 2.91 2.91 0 0 0-1.52.416c-.464.277-.837.728-1.12 1.352-.277.624-.416 1.456-.416 2.496 0 1.019.133 1.84.4 2.464.267.624.632 1.077 1.096 1.36.464.283.984.424 1.56.424.592 0 1.083-.096 1.472-.288.39-.197.733-.419 1.032-.664l.896 1.144c-.368.357-.835.667-1.4.928-.565.256-1.253.384-2.064.384-.933 0-1.773-.219-2.52-.656-.741-.443-1.328-1.09-1.76-1.944-.427-.853-.64-1.904-.64-3.152 0-1.237.221-2.28.664-3.128.443-.853 1.035-1.499 1.776-1.936a4.7 4.7 0 0 1 2.456-.664Zm7.082 2.816v5.904c0 .501.098.859.296 1.072.202.213.506.32.912.32.384 0 .754-.115 1.112-.344.357-.23.64-.51.848-.84v-6.112h1.792V24h-1.544l-.112-1.08a3.102 3.102 0 0 1-1.192.968c-.48.219-.97.328-1.472.328-.816 0-1.427-.224-1.832-.672-.4-.453-.6-1.075-.6-1.864v-6.128h1.792ZM54.69 24v-1.28h1.24v-5.896h-1.24v-1.272H57.3l.328 1.96c.315-.71.704-1.248 1.168-1.616.47-.373 1.072-.56 1.808-.56.251 0 .475.021.672.064.203.037.403.088.6.152l-.535 1.536a3.727 3.727 0 0 0-.48-.104 2.828 2.828 0 0 0-.496-.04c-.614 0-1.145.23-1.592.688-.443.459-.792 1.11-1.048 1.952v3.136h1.704V24h-4.736Zm5.6-5.336v-2.08l.225-1.032h1.36l-.304 3.112h-1.28ZM64.285 24v-1.28h1.24v-5.896h-1.24v-1.272h2.608l.328 1.96c.315-.71.704-1.248 1.168-1.616.47-.373 1.072-.56 1.808-.56.25 0 .475.021.672.064.203.037.403.088.6.152l-.536 1.536a3.727 3.727 0 0 0-.48-.104 2.829 2.829 0 0 0-.496-.04c-.613 0-1.144.23-1.592.688-.442.459-.792 1.11-1.048 1.952v3.136h1.704V24h-4.736Zm5.6-5.336v-2.08l.224-1.032h1.36l-.304 3.112h-1.28Zm5.402 1.688c.037.576.16 1.048.368 1.416.208.363.48.63.816.8.341.17.715.256 1.12.256.416 0 .8-.064 1.152-.192.352-.128.707-.31 1.064-.544l.776 1.072a4.925 4.925 0 0 1-3.08 1.056c-.875 0-1.616-.187-2.224-.56a3.594 3.594 0 0 1-1.376-1.56c-.315-.667-.472-1.437-.472-2.312 0-.848.155-1.605.464-2.272a3.784 3.784 0 0 1 1.328-1.592c.576-.395 1.264-.592 2.064-.592.752 0 1.397.17 1.936.512.544.341.963.827 1.256 1.456.299.624.448 1.376.448 2.256 0 .144-.005.288-.016.432a6.044 6.044 0 0 1-.024.368h-5.6Zm2.016-3.696c-.56 0-1.024.2-1.392.6-.363.4-.573 1.024-.632 1.872h3.912c-.016-.795-.187-1.405-.512-1.832-.32-.427-.779-.64-1.376-.64ZM83.393 24v-8.448h1.544l.136 1.096c.352-.432.768-.76 1.248-.984.48-.224.973-.336 1.48-.336.79 0 1.378.221 1.768.664.394.437.592 1.053.592 1.848V24h-1.792v-5.272c0-.49-.03-.885-.088-1.184-.059-.299-.176-.515-.352-.648-.17-.133-.427-.2-.768-.2-.272 0-.53.059-.776.176-.246.117-.47.272-.672.464a3.703 3.703 0 0 0-.528.6V24h-1.792Zm16.65-.448c-.31.197-.68.357-1.113.48a4.925 4.925 0 0 1-1.352.184c-.98 0-1.728-.253-2.24-.76-.506-.512-.76-1.184-.76-2.016v-4.584h-1.88v-1.304h1.88v-1.888l1.793-.216v2.104h2.848l-.2 1.304H96.37v4.568c0 .453.112.792.336 1.016.229.219.602.328 1.12.328.309 0 .594-.037.856-.112.26-.075.498-.17.711-.288l.649 1.184Zm6.249-11.392v9.536c0 .39.118.667.352.832.24.16.55.24.928.24.246 0 .478-.027.696-.08.219-.053.432-.12.64-.2l.456 1.248a4.887 4.887 0 0 1-2.176.48c-.848 0-1.509-.237-1.984-.712-.469-.48-.704-1.136-.704-1.968V13.48h-2.552v-1.32h4.344Zm13.274 3.392-2.912 8.48a6.678 6.678 0 0 1-.84 1.688 3.89 3.89 0 0 1-1.312 1.184c-.533.299-1.195.483-1.984.552l-.232-1.344c.571-.09 1.024-.224 1.36-.4.341-.17.611-.397.808-.68.203-.283.381-.627.536-1.032h-.608l-2.848-8.448h1.904l2.128 7.2 2.16-7.2h1.84ZM137.97 24h-2.24l-.952-6-1.024 6h-2.192l-1.432-8.448h1.728l.88 7.336 1.176-6.264h1.792l1.096 6.264.88-7.336h1.663L137.97 24Zm6.369-8.672c.827 0 1.523.184 2.088.552.566.368.992.883 1.28 1.544.294.661.44 1.44.44 2.336 0 .89-.149 1.672-.448 2.344-.293.667-.725 1.187-1.296 1.56-.565.368-1.256.552-2.072.552-.816 0-1.509-.179-2.08-.536-.565-.363-.997-.877-1.296-1.544-.293-.667-.44-1.453-.44-2.36 0-.88.147-1.653.44-2.32.299-.667.734-1.187 1.304-1.56.571-.379 1.264-.568 2.08-.568Zm0 1.392c-.645 0-1.13.248-1.456.744-.325.49-.488 1.261-.488 2.312 0 1.045.16 1.816.48 2.312.326.496.811.744 1.456.744.646 0 1.128-.248 1.448-.744.326-.496.488-1.272.488-2.328 0-1.04-.16-1.805-.48-2.296-.32-.496-.802-.744-1.448-.744Zm6.29 7.28v-1.28h1.24v-5.896h-1.24v-1.272h2.608l.328 1.96c.315-.71.704-1.248 1.168-1.616.469-.373 1.072-.56 1.808-.56.251 0 .475.021.672.064.203.037.403.088.6.152l-.536 1.536a3.749 3.749 0 0 0-.976-.144c-.613 0-1.144.23-1.592.688-.443.459-.792 1.11-1.048 1.952v3.136h1.704V24h-4.736Zm5.6-5.336v-2.08l.224-1.032h1.36l-.304 3.112h-1.28Zm11.354-3.112-3.416 3.776L167.943 24h-2.192l-3.632-4.624 3.376-3.824h2.088Zm-5.592-3.592V24h-1.792V12.16l1.792-.2Zm12.362 3.592v7.136h2.296V24h-6.616v-1.312h2.528v-5.824h-2.448v-1.312h4.24Zm-1.248-4.136c.352 0 .634.107.848.32.218.213.328.48.328.8 0 .32-.11.59-.328.808-.214.219-.496.328-.848.328-.342 0-.622-.11-.84-.328a1.097 1.097 0 0 1-.328-.808c0-.32.109-.587.328-.8.218-.213.498-.32.84-.32ZM179.33 24v-8.448h1.544l.136 1.096c.352-.432.768-.76 1.248-.984.48-.224.974-.336 1.48-.336.79 0 1.379.221 1.768.664.395.437.592 1.053.592 1.848V24h-1.792v-5.272c0-.49-.029-.885-.088-1.184-.058-.299-.176-.515-.352-.648-.17-.133-.426-.2-.768-.2-.272 0-.53.059-.776.176a2.62 2.62 0 0 0-.672.464 3.771 3.771 0 0 0-.528.6V24h-1.792Zm16.706-9.52.48 1.488a4.948 4.948 0 0 1-1.112.224c-.4.037-.848.056-1.344.056.507.224.888.512 1.144.864.256.347.384.773.384 1.28 0 .55-.133 1.04-.4 1.472-.267.432-.648.77-1.144 1.016-.496.245-1.091.368-1.784.368-.245 0-.459-.01-.64-.032a3.456 3.456 0 0 1-.52-.104.944.944 0 0 0-.272.304.788.788 0 0 0-.104.392c0 .17.069.32.208.448.144.123.427.184.848.184h1.472c.603 0 1.133.104 1.592.312.464.203.827.483 1.088.84.267.352.4.752.4 1.2 0 .843-.363 1.496-1.088 1.96-.725.464-1.771.696-3.136.696-.965 0-1.723-.099-2.272-.296-.549-.197-.936-.49-1.16-.88-.224-.39-.336-.867-.336-1.432h1.608c0 .293.056.536.168.728.117.192.333.336.648.432.315.096.768.144 1.36.144.592 0 1.061-.05 1.408-.152.352-.096.605-.237.76-.424.16-.181.24-.4.24-.656 0-.341-.149-.605-.448-.792-.299-.187-.699-.28-1.2-.28h-1.448c-.8 0-1.387-.163-1.76-.488-.368-.325-.552-.704-.552-1.136 0-.288.08-.565.24-.832.165-.267.4-.499.704-.696-.507-.267-.877-.59-1.112-.968-.229-.384-.344-.848-.344-1.392 0-.597.149-1.12.448-1.568a2.998 2.998 0 0 1 1.24-1.048c.533-.25 1.147-.376 1.84-.376.677 0 1.243-.035 1.696-.104a5.774 5.774 0 0 0 1.184-.312c.341-.133.68-.28 1.016-.44Zm-3.88 2.088c-.571 0-1 .163-1.288.488-.288.32-.432.739-.432 1.256 0 .533.147.963.44 1.288.299.32.733.48 1.304.48.528 0 .931-.155 1.208-.464.283-.31.424-.75.424-1.32 0-.576-.139-1.008-.416-1.296-.277-.288-.691-.432-1.24-.432Zm19.34-1.24c.826 0 1.522.184 2.088.552.565.368.992.883 1.28 1.544.293.661.44 1.44.44 2.336 0 .89-.15 1.672-.448 2.344-.294.667-.726 1.187-1.296 1.56-.566.368-1.256.552-2.072.552-.816 0-1.51-.179-2.08-.536-.566-.363-.998-.877-1.296-1.544-.294-.667-.44-1.453-.44-2.36 0-.88.146-1.653.44-2.32.298-.667.733-1.187 1.304-1.56.57-.379 1.264-.568 2.08-.568Zm0 1.392c-.646 0-1.131.248-1.456.744-.326.49-.488 1.261-.488 2.312 0 1.045.16 1.816.48 2.312.325.496.81.744 1.456.744.645 0 1.128-.248 1.448-.744.325-.496.488-1.272.488-2.328 0-1.04-.16-1.805-.48-2.296-.32-.496-.803-.744-1.448-.744Zm6.209 7.28v-8.448h1.544l.136 1.096c.352-.432.768-.76 1.248-.984.48-.224.974-.336 1.48-.336.79 0 1.379.221 1.768.664.395.437.592 1.053.592 1.848V24h-1.792v-5.272c0-.49-.029-.885-.088-1.184-.058-.299-.176-.515-.352-.648-.17-.133-.426-.2-.768-.2-.272 0-.53.059-.776.176a2.62 2.62 0 0 0-.672.464 3.771 3.771 0 0 0-.528.6V24h-1.792Z"
      fill="#ABB2BF"
    />
    <path
      d="M242.309 16.48c0-.459-.088-.83-.264-1.112a1.498 1.498 0 0 0-.752-.632c-.331-.133-.728-.2-1.192-.2h-1.144v4.008h1.208c.437 0 .813-.067 1.128-.2.32-.139.568-.36.744-.664.181-.304.272-.704.272-1.2Zm2.272-.016c0 .859-.184 1.563-.552 2.112-.363.544-.872.947-1.528 1.208-.656.256-1.414.384-2.272.384h-1.272V24h-2.192V12.936h3.256c1.434 0 2.552.29 3.352.872.805.581 1.208 1.467 1.208 2.656Zm5.29-1.176c.842 0 1.557.184 2.144.552.586.368 1.032.888 1.336 1.56.309.667.464 1.448.464 2.344 0 .917-.155 1.712-.464 2.384-.31.672-.758 1.192-1.344 1.56-.587.368-1.302.552-2.144.552-.838 0-1.552-.179-2.144-.536-.587-.363-1.035-.877-1.344-1.544-.31-.672-.464-1.472-.464-2.4 0-.885.154-1.664.464-2.336a3.566 3.566 0 0 1 1.352-1.568c.592-.379 1.306-.568 2.144-.568Zm0 1.592c-.592 0-1.035.232-1.328.696-.288.464-.432 1.192-.432 2.184 0 1.003.144 1.736.432 2.2.288.459.728.688 1.32.688.592 0 1.032-.23 1.32-.688.288-.464.432-1.203.432-2.216 0-.987-.144-1.71-.432-2.168-.288-.464-.726-.696-1.312-.696Zm6.153 7.12v-1.464h1.192v-5.552h-1.192v-1.456h2.8l.392 1.944c.31-.72.699-1.261 1.168-1.624.47-.368 1.059-.552 1.768-.552.272 0 .512.021.72.064.214.043.416.099.608.168l-.632 1.776a4.3 4.3 0 0 0-.472-.096 2.874 2.874 0 0 0-.504-.04c-.586 0-1.098.23-1.536.688-.432.453-.768 1.07-1.008 1.848v2.832h1.688V24h-4.992Zm5.672-5.168v-2.248l.288-1.056h1.496l-.376 3.304h-1.408Zm11.154 4.696a4.284 4.284 0 0 1-1.144.512c-.448.133-.933.2-1.456.2-1.035 0-1.813-.267-2.336-.8-.523-.539-.784-1.253-.784-2.144v-4.272h-1.84v-1.496h1.84v-1.864l2.112-.256v2.12h2.8l-.216 1.496h-2.584v4.264c0 .437.107.757.32.96.213.203.557.304 1.032.304.304 0 .581-.035.832-.104.256-.075.488-.168.696-.28l.728 1.36Zm7.538-11.608c.565 0 1.066.045 1.504.136.437.09.834.213 1.192.368l-.608 1.424a4.157 4.157 0 0 0-.888-.256 5.465 5.465 0 0 0-.928-.08c-.534 0-.923.101-1.168.304-.24.197-.36.515-.36.952v1.336h2.8l-.232 1.512h-2.568V24h-2.104v-6.384h-1.864v-1.512h1.864V14.72c0-.55.133-1.032.4-1.448.266-.421.65-.752 1.152-.992.506-.24 1.109-.36 1.808-.36Zm7.858 3.368c.842 0 1.557.184 2.144.552.586.368 1.032.888 1.336 1.56.309.667.464 1.448.464 2.344 0 .917-.155 1.712-.464 2.384-.31.672-.758 1.192-1.344 1.56-.587.368-1.302.552-2.144.552-.838 0-1.552-.179-2.144-.536-.587-.363-1.035-.877-1.344-1.544-.31-.672-.464-1.472-.464-2.4 0-.885.154-1.664.464-2.336a3.566 3.566 0 0 1 1.352-1.568c.592-.379 1.306-.568 2.144-.568Zm0 1.592c-.592 0-1.035.232-1.328.696-.288.464-.432 1.192-.432 2.184 0 1.003.144 1.736.432 2.2.288.459.728.688 1.32.688.592 0 1.032-.23 1.32-.688.288-.464.432-1.203.432-2.216 0-.987-.144-1.71-.432-2.168-.288-.464-.726-.696-1.312-.696Zm10.105-4.736v9.392c0 .368.107.63.32.784.219.155.512.232.88.232.23 0 .451-.024.664-.072.214-.053.416-.117.608-.192l.52 1.44c-.266.133-.592.25-.976.352a4.88 4.88 0 0 1-1.32.16c-.922 0-1.621-.264-2.096-.792-.474-.528-.712-1.24-.712-2.136V13.64h-2.536v-1.496h4.648Zm10.434 3.384v6.976h2.232V24h-6.824v-1.496h2.48v-5.48h-2.4v-1.496h4.512Zm-1.368-4.272c.389 0 .704.12.944.36.245.24.368.539.368.896s-.123.659-.368.904c-.24.24-.555.36-.944.36-.389 0-.707-.12-.952-.36a1.23 1.23 0 0 1-.368-.904c0-.357.123-.656.368-.896s.563-.36.952-.36Zm9.61 4.032c.842 0 1.557.184 2.144.552.586.368 1.032.888 1.336 1.56.309.667.464 1.448.464 2.344 0 .917-.155 1.712-.464 2.384-.31.672-.758 1.192-1.344 1.56-.587.368-1.302.552-2.144.552-.838 0-1.552-.179-2.144-.536-.587-.363-1.035-.877-1.344-1.544-.31-.672-.464-1.472-.464-2.4 0-.885.154-1.664.464-2.336a3.566 3.566 0 0 1 1.352-1.568c.592-.379 1.306-.568 2.144-.568Zm0 1.592c-.592 0-1.035.232-1.328.696-.288.464-.432 1.192-.432 2.184 0 1.003.144 1.736.432 2.2.288.459.728.688 1.32.688.592 0 1.032-.23 1.32-.688.288-.464.432-1.203.432-2.216 0-.987-.144-1.71-.432-2.168-.288-.464-.726-.696-1.312-.696Z"
      fill="#fff"
    />
    <path stroke="#ABB2BF" d="M.5.5h401v36H.5z" />
  </svg>
);

export default SvgComponent;