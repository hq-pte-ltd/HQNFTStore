import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Modal } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { HowToBuyModal } from '../HowToBuyModal';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { ConnectButton } from '@oyster/common';
import { MobileNavbar } from '../MobileNavbar';
import { NavLink } from 'react-router-dom';

const getDefaultLinkActions = (connected: boolean) => {
  return [
    <nav className="Menu text-center" key={'navbar'}>
      {/* <li className="mx-5 mt-4">
        <NavLink activeClassName="active" to="https://www.homeqube.ai/">
          BETA
        </NavLink>
      </li> */}
      <li className="mx-5 pe-3 mt-4 lh-sm">
        <a
          href="https://www.homeqube.ai/"
          key={'homeqube'}
          target="_blank"
          rel="noreferrer"
        >
          HOMEQUBE.AI
        </a>
      </li>
      {/* 
      <li className="mx-5 pe-3 mt-4 lh-sm">
        <NavLink
          activeClassName="active"
          to="/collections"
          key={'nftcollecions'}
        >
          NFT <br /> COLLECTIONS
        </NavLink>
      </li> */}

      {/* <Link to={`/collections`} key={'collections'}>
        <Button className="app-btn">
          {' '}
          NFT <br /> COLLECTIONS
        </Button>
      </Link> */}

      <li className="mx-5 pe-3 mt-4 lh-sm">
        <a
          href="https://www.qube.homeqube.com/"
          key={'homeqube'}
          target="_blank"
          rel="noreferrer"
        >
          ICO <br /> WEBISTE
        </a>
      </li>

      <li className="mx-4 mt-3 lh-sm">
        <a
          href="https://t.me/homeqube"
          key={'telegram'}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="exchange-button-more2 btn rounded-pill"
            type="button"
          >
            TELEGRAM
          </button>
        </a>
      </li>

      <li className="mx-4 mt-3 lh-sm">
        <a
          href="https://discord.gg/JhQXmjm59e"
          key={'discord'}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="exchange-button-more2 btn rounded-pill"
            type="button"
          >
            DISCORD
          </button>
        </a>
      </li>
      {/* <a
        href="https://www.qube.homeqube.com/"
        key={'qube'}
        target="_blank"
        rel="noreferrer"
      >
        <Button className="app-btn">
          {' '}
          ICO <br /> WEBISTE
        </Button>
      </a> */}
    </nav>,
  ];
};

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      {getDefaultLinkActions(connected)}
    </div>
  );
};

export const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Modal
          title={<img src={'/Homeqube-logo-black_small 1.svg'} />}
          visible={isModalVisible}
          footer={null}
          className={'modal-box'}
          closeIcon={
            <img
              onClick={() => setIsModalVisible(false)}
              src={'/modals/close.svg'}
            />
          }
        >
          <div className="site-card-wrapper mobile-menu-modal">
            <Menu onClick={() => setIsModalVisible(false)}>
              {getDefaultLinkActions(connected).map((item, idx) => (
                <Menu.Item key={idx}>{item}</Menu.Item>
              ))}
            </Menu>
            <div className="actions">
              {!connected ? (
                <div className="actions-buttons">
                  <ConnectButton
                    onClick={() => setIsModalVisible(false)}
                    className="secondary-btn"
                  />
                  {/* 
                   <HowToBuyModal
                    onClick={() => setIsModalVisible(false)}
                    buttonClassName="black-btn"
                  />
                  */}
                </div>
              ) : (
                <>
                  <CurrentUserBadgeMobile
                    showBalance={false}
                    showAddress={true}
                    iconSize={24}
                    closeModal={() => {
                      setIsModalVisible(false);
                    }}
                  />
                  {/* 
                   <Notifications />
                   */}

                  <Cog />
                </>
              )}
            </div>
          </div>
        </Modal>
        <MenuOutlined
          onClick={() => setIsModalVisible(true)}
          style={{ fontSize: '1.4rem' }}
        />
      </>
    );

  return <DefaultActions />;
};

export const LogoLink = () => {
  return (
    <Link to={`/art/create/0`}>
      <img src={'/Homeqube-logo-black_small 1.svg'} />
    </Link>
  );
};

export const AppBar = () => {
  const { connected } = useWallet();
  return (
    <>
      <MobileNavbar />
      <div id="desktop-navbar">
        <div className="app-left">
          <LogoLink />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <MetaplexMenu />
        </div>
        <div className="app-right">
          {/* {!connected && (
            <HowToBuyModal buttonClassName="modal-button-default" />
          )} */}
          {!connected && (
            <ConnectButton style={{ height: 48 }} allowWalletChange />
          )}
          {connected && (
            <>
              <CurrentUserBadge
                showBalance={false}
                showAddress={true}
                iconSize={24}
              />
              <Notifications />
              <Cog />
            </>
          )}
        </div>
      </div>
    </>
  );
};
