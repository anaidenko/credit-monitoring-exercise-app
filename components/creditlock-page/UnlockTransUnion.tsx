import TransUnionLogo from '../../public/icons/transunion-logo.svg'
import CreditlockUnlockedIcon from '../../public/icons/creditlock-unlocked.svg'
import LockIcon from '../../public/icons/lock.svg'
import UnlockIcon from '../../public/icons/unlock.svg'

const UnlockTransUnion = (): JSX.Element => {
  return (
    <section className="center-block">
      <div className="logo">
        <TransUnionLogo />
      </div>
      <div className="middle-panel">
        <div className="lock-btn">
          <div className="green-area">
            <CreditlockUnlockedIcon />
          </div>
          <span className="unlocked">Unlocked</span>
        </div>
        <p className="transunion-file">Your TransUnion File is Unlocked</p>
        <p className="lock-text">
          Lock your score to prevent un-authorzied access to your credit file.
        </p>
      </div>
      <div>
        <p className="history-title">TransUnion lock history</p>
        <ul>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <UnlockIcon />
              <span className="lock">Lock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <UnlockIcon />
              <span className="lock">Unlock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <LockIcon />
              <span className="lock">Lock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <UnlockIcon />
              <span className="lock">Unlock</span>
            </div>
          </li>
        </ul>
        <p className="show-all">Show All (5)</p>
      </div>

      <style jsx global>{`
        section.credit-freeze-center {
          margin-top: 0;
        }

        .credit-freeze-center .center-block {
          width: 348px;
          padding: 22px 22px 24px;
          border: 1px solid #d7dee4;
          border-radius: 6px;
          cursor: pointer;
        }

        .credit-freeze-center .center-block.active {
          border: 1px solid #00d2a0;
          background-color: rgba(0, 210, 160, 0.03);
        }

        .credit-freeze-center .logo {
          display: flex;
          justify-content: center;
          margin: 0 auto 68px;
        }

        .credit-freeze-center .center-block.active {
          border: 1px solid #27d381;
          border-radius: 6px;
          background-color: rgba(39, 211, 129, 0.05);
        }

        .credit-freeze-center .unlock-btn {
          border: 1px solid #25c77a;
          border-radius: 4px;
          background-color: #27d381;
          margin: 0 auto 24px;
          height: 43px;
          width: 133px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .credit-freeze-center .white-area {
          height: 39px;
          width: 38px;
          border: 1px solid #fafafa;
          border-radius: 3px;
          background-color: #ffffff;
          box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06),
            0 1px 1px 0 rgba(22, 29, 37, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          right: 1px;
        }

        .credit-freeze-center .green-area {
          height: 38px;
          width: 38px;
          border: 1px solid #00c798;
          border-radius: 3px;
          background-color: #27d381;
          box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06),
            0 1px 1px 0 rgba(22, 29, 37, 0.1);
          margin-right: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          left: 1px;
          top: -1px;
        }

        .credit-freeze-center .lock-btn {
          margin: 0 auto 24px;
          height: 43px;
          width: 133px;
          border: 1px solid #d7dee4;
          border-radius: 4px;
          display: flex;
          align-items: center;
        }

        .credit-freeze-center .unlocked {
          color: #bcc7d1;
          font-weight: 500;
          font-size: 16px;
        }

        .credit-freeze-center .transunion-file {
          color: #3e3f42;
          font-size: 16px;
          text-align: center;
          font-weight: 500;
        }

        .credit-freeze-center .lock-text {
          color: #6b6c6f;
          font-size: 16px;
          text-align: center;
          margin: 4px auto 32px;
        }

        .credit-freeze-center .active .lock-text {
          width: 80%;
        }

        .credit-freeze-center .locked {
          color: white;
          font-size: 16px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .center-block .history-title {
          color: #3e3f42;
          font-size: 16px;
          margin-bottom: 7px;
        }

        .center-block .history-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 0;
          border-bottom: 1px solid var(--light-border);
        }

        .center-block .history-list:last-child {
          border-bottom: none;
        }

        .center-block .date {
          color: #6b6c6f;
          font-size: 14px;
          flex: 1;
        }

        .center-block .lock-wrapper {
          flex: 0 0 75px;
        }

        .center-block .lock {
          color: #6b6c6f;
          font-size: 14px;
          margin-left: 13px;
        }

        .center-block .show-all {
          text-align: center;
          margin: 8px auto 0;
          color: #1665d8;
          font-size: 16px;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          section.credit-freeze-center {
            margin-top: 0;
          }
        }

        @media screen and (max-width: 576px) {
          .credit-freeze-center .center-block {
            width: 100%;
            margin: 0 auto;
            padding: 22px 20px 24px;
          }

          .credit-lock-header .title {
            font-size: 24px;
          }

          .credit-lock-header .description {
            margin: 11px 0 24px;
          }

          .credit-freeze-center .logo {
            margin-bottom: 36px;
          }
        }

        @media screen and (max-width: 380px) {
          .center-block .lock {
            font-size: 12px;
          }

          .center-block .lock-wrapper {
            flex: 0 0 70px;
          }

          .center-block .date {
            font-size: 12px;
          }

          .credit-freeze-center .lock-text {
            width: 90%;
          }
        }
      `}</style>

      <style jsx global>
        {`
          .theme-brigit .credit-freeze-center .center-block {
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            padding: 30px 20px;
          }

          .theme-brigit .credit-freeze-center .center-block.active {
            border: none;
            background-color: white;
          }

          .theme-brigit .credit-freeze-center .unlock-btn {
            background: #24956a;
            border: 2px solid #e5e5e5;
            width: 151px;
            height: 48px;
            margin-bottom: 30px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }

          .theme-brigit .credit-freeze-center .logo {
            margin-bottom: 35px;
          }

          .theme-brigit .credit-freeze-center .logo svg {
            height: 57px;
          }

          .theme-brigit .credit-freeze-center .lock-btn {
            width: 151px;
            height: 48px;
            margin-bottom: 30px;
            border: 2px solid #e5e5e5;
          }

          .theme-brigit .credit-freeze-center .lock-btn .green-area {
            height: 49px;
            width: 49px;
            background: #24956a;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.18),
              0 2px 2px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
            left: -2px;
            border: none;
            top: -1px;
          }

          .theme-brigit .credit-freeze-center .lock-btn .unlocked {
            color: #333;
          }

          .theme-brigit .credit-freeze-center .history-title {
            font-size: 16px;
            color: #24956a;
            text-align: center;
            line-height: 22px;
          }

          .theme-brigit .credit-freeze-center .green-area svg {
            display: none;
          }

          .theme-brigit .credit-freeze-center .green-area:after {
            display: block;
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIzNXB4IiB2aWV3Qm94PSIwIDAgMzUgMzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2xvY2svd2hpdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzU1IiBoZWlnaHQ9IjM3MiIgcng9IjYiPjwvcmVjdD4KICAgICAgICA8ZmlsdGVyIHg9Ii0zLjUlIiB5PSItMy4xJSIgd2lkdGg9IjEwNy4wJSIgaGVpZ2h0PSIxMDYuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8cmVjdCBpZD0icGF0aC0zIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDciIGhlaWdodD0iNDciIHJ4PSI0LjkyOCI+PC9yZWN0PgogICAgICAgIDxmaWx0ZXIgeD0iLTM4LjMlIiB5PSItMjUuNSUiIHdpZHRoPSIxNzYuNiUiIGhlaWdodD0iMTc2LjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjIyNDkyMzUxIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiIHJlc3VsdD0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjYiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjIiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjIiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMiI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTg0MjIyMDI4IDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjIiIHJlc3VsdD0ic2hhZG93TWF0cml4T3V0ZXIyIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZU1lcmdlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkNyZWRpdC1UYWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJGcmVlemUtLy1VbmNsb2NrZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzc1IiBoZWlnaHQ9IjE2MjgiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9IlNlY3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgNTExLjAwMDAwMCkiPjwvZz4KICAgICAgICAgICAgPGcgaWQ9IkxvY2stQ2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAzOTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iTWFzay1Db3B5LTciPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0yKSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IkxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS4wMDAwMDAsIDEyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiNFNUU1RTUiIHN0cm9rZS13aWR0aD0iMi4yIiBmaWxsPSIjRkZGRkZGIiB4PSIxIiB5PSIwIiB3aWR0aD0iMTUxIiBoZWlnaHQ9IjQ4IiByeD0iNC45MjgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlLUNvcHktNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci00KSIgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzI0OTU2QSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMzUwMDAwLCAzLjM1MDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjc1NjgxODIsLTEuMDg1MzU0MDNlLTEyIEM4LjMzNjU3NzY5LC0xLjA4NTM1NDAzZS0xMiA1LjUzMzA2NDI1LDIuNzA5NzgxODEgNS40MDQ1ODEzLDYuMTIxNjQyNDggTDUuNCw2LjM1MzExMjI0IEw1LjQsMTIuOCBMMTguMTEzNjM2NCwxMi44IEwxOC4xMTM2MzY0LDYuMzY1MzI4NDcgTDE4LjEwOTQwMDcsNi4xMzM4ODY0NCBDMTcuOTgwNTcyMSwyLjcwOTc4MTgxIDE1LjE3NzA1ODcsLTEuMDg1MzU0MDNlLTEyIDExLjc1NjgxODIsLTEuMDg1MzU0MDNlLTEyIFogTTExLjc1NjgxODIsMS4zIEMxNC40NzcwNzYzLDEuMyAxNi43MDc3NTUzLDMuNDU2MDk5MjcgMTYuODA5OTc1OSw2LjE3MDU2Mjg3IEwxNi44MTM3NTEyLDYuMzc3NTQ0NyBMMTYuODEzLDExLjUgTDYuNywxMS41IEw2LjcsNi4zNjUzMjg0NyBMNi43MDQwMDYwOSw2LjE1ODMxODkgQzYuODA1ODgxMDYsMy40NTYwOTkyNyA5LjAzNjU2MDAzLDEuMyAxMS43NTY4MTgyLDEuMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuNjUsMTEuNDUgTDExLjY0OTU3NCwxMS40NSBMMTEuNjQ5NTc0LDExLjQ1IEwxOS43NDA5MDkxLDExLjQ1IEMyMS4zOTc3NjMzLDExLjQ1IDIyLjc0MDkwOTEsMTIuNzkzMTQ1OCAyMi43NDA5MDkxLDE0LjQ1IEwyMi43NDA5MDkxLDI0LjE1OTA5MDkgQzIyLjc0MDkwOTEsMjUuODE1OTQ1MiAyMS4zOTc3NjMzLDI3LjE1OTA5MDkgMTkuNzQwOTA5MSwyNy4xNTkwOTA5IEwxMS42NzU3MzE3LDI3LjE1OTA5MDkgTDExLjY3NTczMTcsMjcuMTU5MDkwOSBMMy42NSwyNy4xNTkwOTA5IEMxLjk5MzE0NTc1LDI3LjE1OTA5MDkgMC42NSwyNS44MTU5NDUyIDAuNjUsMjQuMTU5MDkwOSBMMC42NSwxNC40NSBDMC42NSwxMi43OTMxNDU4IDEuOTkzMTQ1NzUsMTEuNDUgMy42NSwxMS40NSBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNzQwOTA5MSwxMC42NSBMMy42NSwxMC42NSBDMS42MzQxNjA2NiwxMC42NSA5Ljk0NzU5ODNlLTE0LDEyLjI4NDE2MDcgOS45NDc1OTgzZS0xNCwxNC4zIEw5Ljk0NzU5ODNlLTE0LDI0LjAwOTA5MDkgQzkuOTQ3NTk4M2UtMTQsMjYuMDI0OTMwMiAxLjYzNDE2MDY2LDI3LjY1OTA5MDkgMy42NSwyNy42NTkwOTA5IEwxOS43NDA5MDkxLDI3LjY1OTA5MDkgQzIxLjc1Njc0ODQsMjcuNjU5MDkwOSAyMy4zOTA5MDkxLDI2LjAyNDkzMDIgMjMuMzkwOTA5MSwyNC4wMDkwOTA5IEwyMy4zOTA5MDkxLDE0LjMgQzIzLjM5MDkwOTEsMTIuMjg0MTYwNyAyMS43NTY3NDg0LDEwLjY1IDE5Ljc0MDkwOTEsMTAuNjUgWiBNMy42NSwxMS45NSBMMTkuNzQwOTA5MSwxMS45NSBDMjEuMDM4Nzc4MywxMS45NSAyMi4wOTA5MDkxLDEzLjAwMjEzMDggMjIuMDkwOTA5MSwxNC4zIEwyMi4wOTA5MDkxLDI0LjAwOTA5MDkgQzIyLjA5MDkwOTEsMjUuMzA2OTYwMSAyMS4wMzg3NzgzLDI2LjM1OTA5MDkgMTkuNzQwOTA5MSwyNi4zNTkwOTA5IEwzLjY1LDI2LjM1OTA5MDkgQzIuMzUyMTMwODQsMjYuMzU5MDkwOSAxLjMsMjUuMzA2OTYwMSAxLjMsMjQuMDA5MDkwOSBMMS4zLDE0LjMgQzEuMywxMy4wMDIxMzA4IDIuMzUyMTMwODQsMTEuOTUgMy42NSwxMS45NSBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS42MzQwOTA5LDE1LjM1IEMxMi43NTI0Njc1LDE1LjM1IDEzLjY1OTA5MDksMTYuMjU2NjIzNCAxMy42NTkwOTA5LDE3LjM3NSBDMTMuNjU5MDkwOSwxOC4wNDkwMDYgMTMuMzI5ODAxMSwxOC42NDYxMDIyIDEyLjgyMzMyMjEsMTkuMDE0MTg4MiBMMTMuNDgzMTE5NCwyMi41NjM0NjE4IEMxMy40OTIwOSwyMi42MTE2OTk4IDEzLjQ5NjYwMzgsMjIuNjYwNjYwNyAxMy40OTY2MDM4LDIyLjcwOTcyNTcgQzEzLjQ5NjYwMzgsMjMuMTUxNTUzNSAxMy4xMzg0MzE2LDIzLjUwOTcyNTcgMTIuNjk2NjAzOCwyMy41MDk3MjU3IEwxMi42OTY2MDM4LDIzLjUwOTcyNTcgTDEwLjYwMjkzNzcsMjMuNTA5NzI1NyBDMTAuNTQ1NDcxOSwyMy41MDk3MjU3IDEwLjQ4ODE3MzMsMjMuNTAzNTMzOSAxMC40MzIwMzQxLDIzLjQ5MTI1NzUgQzEwLjAwMDQwNiwyMy4zOTY4NzAxIDkuNzI3MDE4NDcsMjIuOTcwNDUwMiA5LjgyMTQwNTkzLDIyLjUzODgyMjEgTDkuODIxNDA1OTMsMjIuNTM4ODIyMSBMMTAuNTcyNzU0NywxOS4wOTk5MTcxIEM5Ljk5NDUxNDIzLDE4Ljc0MzM2OTMgOS42MDkwOTA5MSwxOC4xMDQxOTQ5IDkuNjA5MDkwOTEsMTcuMzc1IEM5LjYwOTA5MDkxLDE2LjI1NjYyMzQgMTAuNTE1NzE0MywxNS4zNSAxMS42MzQwOTA5LDE1LjM1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzI0OTU2QSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
          }

          .theme-brigit .credit-freeze-center .white-area {
            width: 45px;
            height: 45px;
            right: 0;
            position: relative;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.18),
              0 2px 2px 0 rgba(0, 0, 0, 0.22);
          }

          .theme-brigit .credit-freeze-center .white-area:after {
            display: block;
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIzNXB4IiB2aWV3Qm94PSIwIDAgMzUgMzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2xvY2svZ3JlZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzU1IiBoZWlnaHQ9IjM3MiIgcng9IjYiPjwvcmVjdD4KICAgICAgICA8ZmlsdGVyIHg9Ii0zLjUlIiB5PSItMy4xJSIgd2lkdGg9IjEwNy4wJSIgaGVpZ2h0PSIxMDYuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8cmVjdCBpZD0icGF0aC0zIiB4PSIxMDMiIHk9IjAiIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NyIgcng9IjQuOTI4Ij48L3JlY3Q+CiAgICAgICAgPGZpbHRlciB4PSItMzguMyUiIHk9Ii0yNS41JSIgd2lkdGg9IjE3Ni42JSIgaGVpZ2h0PSIxNzYuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci00Ij4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yMjI0OTIzNTEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMiI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIgaW49InNoYWRvd09mZnNldE91dGVyMiIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIyIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xODQyMjIwMjggMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMiIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjIiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIyIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICA8L2ZlTWVyZ2U+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iQ3JlZGl0LVRhYiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZyZWV6ZS0vLUxvY2tlZC0vLUNsb3NlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMS4wMDAwMDAsIC01MjcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNzUiIGhlaWdodD0iNzc4Ij48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJMb2NrLUNhcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzk5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2stQ29weS03Ij4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJMb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDIuMDAwMDAwLCAxMjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgc3Ryb2tlPSIjRTVFNUU1IiBzdHJva2Utd2lkdGg9IjIuMiIgZmlsbD0iIzI0OTU2QSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE1MSIgaGVpZ2h0PSI0OCIgcng9IjQuOTI4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS1Db3B5LTQiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA5LjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjM1MDAwMCwgMy4zNTAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS43NTY4MTgyLC0xLjA4NTM1NDAzZS0xMiBDOC4zMzY1Nzc2OSwtMS4wODUzNTQwM2UtMTIgNS41MzMwNjQyNSwyLjcwOTc4MTgxIDUuNDA0NTgxMyw2LjEyMTY0MjQ4IEw1LjQsNi4zNTMxMTIyNCBMNS40LDEyLjggTDE4LjExMzYzNjQsMTIuOCBMMTguMTEzNjM2NCw2LjM2NTMyODQ3IEwxOC4xMDk0MDA3LDYuMTMzODg2NDQgQzE3Ljk4MDU3MjEsMi43MDk3ODE4MSAxNS4xNzcwNTg3LC0xLjA4NTM1NDAzZS0xMiAxMS43NTY4MTgyLC0xLjA4NTM1NDAzZS0xMiBaIE0xMS43NTY4MTgyLDEuMyBDMTQuNDc3MDc2MywxLjMgMTYuNzA3NzU1MywzLjQ1NjA5OTI3IDE2LjgwOTk3NTksNi4xNzA1NjI4NyBMMTYuODEzNzUxMiw2LjM3NzU0NDcgTDE2LjgxMywxMS41IEw2LjcsMTEuNSBMNi43LDYuMzY1MzI4NDcgTDYuNzA0MDA2MDksNi4xNTgzMTg5IEM2LjgwNTg4MTA2LDMuNDU2MDk5MjcgOS4wMzY1NjAwMywxLjMgMTEuNzU2ODE4MiwxLjMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMjQ5NTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjY1LDExLjQ1IEwxMS42NDk1NzQsMTEuNDUgTDExLjY0OTU3NCwxMS40NSBMMTkuNzQwOTA5MSwxMS40NSBDMjEuMzk3NzYzMywxMS40NSAyMi43NDA5MDkxLDEyLjc5MzE0NTggMjIuNzQwOTA5MSwxNC40NSBMMjIuNzQwOTA5MSwyNC4xNTkwOTA5IEMyMi43NDA5MDkxLDI1LjgxNTk0NTIgMjEuMzk3NzYzMywyNy4xNTkwOTA5IDE5Ljc0MDkwOTEsMjcuMTU5MDkwOSBMMTEuNjc1NzMxNywyNy4xNTkwOTA5IEwxMS42NzU3MzE3LDI3LjE1OTA5MDkgTDMuNjUsMjcuMTU5MDkwOSBDMS45OTMxNDU3NSwyNy4xNTkwOTA5IDAuNjUsMjUuODE1OTQ1MiAwLjY1LDI0LjE1OTA5MDkgTDAuNjUsMTQuNDUgQzAuNjUsMTIuNzkzMTQ1OCAxLjk5MzE0NTc1LDExLjQ1IDMuNjUsMTEuNDUgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI0OTU2QSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5Ljc0MDkwOTEsMTAuNjUgTDMuNjUsMTAuNjUgQzEuNjM0MTYwNjYsMTAuNjUgOS45NDc1OTgzZS0xNCwxMi4yODQxNjA3IDkuOTQ3NTk4M2UtMTQsMTQuMyBMOS45NDc1OTgzZS0xNCwyNC4wMDkwOTA5IEM5Ljk0NzU5ODNlLTE0LDI2LjAyNDkzMDIgMS42MzQxNjA2NiwyNy42NTkwOTA5IDMuNjUsMjcuNjU5MDkwOSBMMTkuNzQwOTA5MSwyNy42NTkwOTA5IEMyMS43NTY3NDg0LDI3LjY1OTA5MDkgMjMuMzkwOTA5MSwyNi4wMjQ5MzAyIDIzLjM5MDkwOTEsMjQuMDA5MDkwOSBMMjMuMzkwOTA5MSwxNC4zIEMyMy4zOTA5MDkxLDEyLjI4NDE2MDcgMjEuNzU2NzQ4NCwxMC42NSAxOS43NDA5MDkxLDEwLjY1IFogTTMuNjUsMTEuOTUgTDE5Ljc0MDkwOTEsMTEuOTUgQzIxLjAzODc3ODMsMTEuOTUgMjIuMDkwOTA5MSwxMy4wMDIxMzA4IDIyLjA5MDkwOTEsMTQuMyBMMjIuMDkwOTA5MSwyNC4wMDkwOTA5IEMyMi4wOTA5MDkxLDI1LjMwNjk2MDEgMjEuMDM4Nzc4MywyNi4zNTkwOTA5IDE5Ljc0MDkwOTEsMjYuMzU5MDkwOSBMMy42NSwyNi4zNTkwOTA5IEMyLjM1MjEzMDg0LDI2LjM1OTA5MDkgMS4zLDI1LjMwNjk2MDEgMS4zLDI0LjAwOTA5MDkgTDEuMywxNC4zIEMxLjMsMTMuMDAyMTMwOCAyLjM1MjEzMDg0LDExLjk1IDMuNjUsMTEuOTUgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzI0OTU2QSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjM0MDkwOSwxNS4zNSBDMTIuNzUyNDY3NSwxNS4zNSAxMy42NTkwOTA5LDE2LjI1NjYyMzQgMTMuNjU5MDkwOSwxNy4zNzUgQzEzLjY1OTA5MDksMTguMDQ5MDA2IDEzLjMyOTgwMTEsMTguNjQ2MTAyMiAxMi44MjMzMjIxLDE5LjAxNDE4ODIgTDEzLjQ4MzExOTQsMjIuNTYzNDYxOCBDMTMuNDkyMDksMjIuNjExNjk5OCAxMy40OTY2MDM4LDIyLjY2MDY2MDcgMTMuNDk2NjAzOCwyMi43MDk3MjU3IEMxMy40OTY2MDM4LDIzLjE1MTU1MzUgMTMuMTM4NDMxNiwyMy41MDk3MjU3IDEyLjY5NjYwMzgsMjMuNTA5NzI1NyBMMTIuNjk2NjAzOCwyMy41MDk3MjU3IEwxMC42MDI5Mzc3LDIzLjUwOTcyNTcgQzEwLjU0NTQ3MTksMjMuNTA5NzI1NyAxMC40ODgxNzMzLDIzLjUwMzUzMzkgMTAuNDMyMDM0MSwyMy40OTEyNTc1IEMxMC4wMDA0MDYsMjMuMzk2ODcwMSA5LjcyNzAxODQ3LDIyLjk3MDQ1MDIgOS44MjE0MDU5MywyMi41Mzg4MjIxIEw5LjgyMTQwNTkzLDIyLjUzODgyMjEgTDEwLjU3Mjc1NDcsMTkuMDk5OTE3MSBDOS45OTQ1MTQyMywxOC43NDMzNjkzIDkuNjA5MDkwOTEsMTguMTA0MTk0OSA5LjYwOTA5MDkxLDE3LjM3NSBDOS42MDkwOTA5MSwxNi4yNTY2MjM0IDEwLjUxNTcxNDMsMTUuMzUgMTEuNjM0MDkwOSwxNS4zNSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzUiIGhlaWdodD0iMzUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg== ');
          }

          .theme-brigit .credit-freeze-center .white-area svg {
            display: none;
          }

          .theme-brigit .credit-freeze-center .transunion-file {
            color: #333333;
            font-weight: 700;
          }

          .theme-brigit .credit-freeze-center .active .lock-text {
            font-size: 16px;
            color: #696969;
            margin-bottom: 30px;
          }

          .theme-brigit .center-block .history-title {
            font-weight: 600;
            margin-bottom: 15px;
          }

          .theme-brigit .center-block .history-list {
            padding: 21px 20px;
          }

          .theme-brigit .center-block .date {
            color: #696969;
          }

          .theme-brigit .center-block .lock {
            color: #333333;
            font-weight: 500;
          }

          .theme-brigit .center-block .lock-wrapper {
            flex: 0 0 75px;
          }

          .theme-brigit .center-block .history-list:last-child {
            border-bottom: 1px solid var(--light-border);
          }

          .theme-brigit .center-block .history-list:first-child {
            border-top: 1px solid var(--light-border);
          }

          .theme-brigit .center-block .show-all {
            font-size: 16px;
            color: #b3b3b3;
            margin-top: 30px;
            font-weight: 500;
          }

          @media screen and (max-width: 768px) {
          }

          @media screen and (max-width: 576px) {
            .theme-brigit .credit-freeze-center .transunion-file {
              font-size: 16px;
            }
          }

          @media screen and (max-width: 400px) {
            .theme-brigit .credit-freeze-center .active .lock-text {
              width: 100%;
            }

            .theme-brigit .center-block .lock,
            .theme-brigit .center-block .date {
              font-size: 13px;
            }

            .theme-brigit .center-block .lock {
              margin-left: 5px;
            }

            .theme-brigit .center-block .history-list {
              padding: 10px 0;
            }

            .theme-brigit .center-block .lock-wrapper {
              flex: 0 0 65px;
            }
          }
        `}
      </style>
    </section>
  )
}

export default UnlockTransUnion
