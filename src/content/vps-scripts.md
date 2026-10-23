---
title: VPS Testing Scripts
---

# VPS Testing Scripts

## 1. VPS System Check Scripts
```bash
# All-in-one test script
bash <(wget -qO- --no-check-certificate https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh)
wget -qO- bench.sh | bash
wget -qO- benchy.pw | sh

# GB6 benchmark with bandwidth test
curl -sL yabs.sh | bash

# GB6 benchmark without bandwidth test
curl -sL yabs.sh | bash -s -- -i

# GB5 benchmark with bandwidth test
curl -sL yabs.sh | bash -5

# GB5 benchmark without bandwidth test
curl -sL yabs.sh | bash -s -- -i -5

# GeekBench 5 single test
bash <(curl -sL bash.icu/gb5)

# Streaming media tests
bash <(curl -L -s media.ispvps.com)
bash <(curl -L -s check.unlock.media)
curl -sL bench.monster | bash -s -- -asia

# Disk I/O test
dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
```

## 2. Route Tracing Script
```bash
curl https://raw.githubusercontent.com/ludashi2020/backtrace/main/install.sh -sSf | sh
```

## 3. Docker Installation Script (Debian only)
```bash
apt install wget curl sudo vim git -y 
curl -fsSL https://get.docker.com | bash -s docker
```

## 4. Node NVM Installation
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
node -v
npm -v
```

## 5. Unlock Testing
```bash
bash <(curl -Ls https://cdn.jsdelivr.net/gh/missuo/OpenAI-Checker/openai.sh)
bash <(curl -Ls unlock.icmp.ing/test.sh)
bash <(curl -sL IP.Check.Place)
```

## 6. Comprehensive Toolbox
```bash
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

## 7. Streaming Media Tests
```bash
bash <(curl -Ls unlock.icmp.ing/test.sh) -m 4
bash <(curl -Ls unlock.icmp.ing/test.sh)
bash <(curl -sL IP.Check.Place)
```

## 8. Oracle Root Password Modification
```bash
#!/bin/bash
echo root:11235879 |sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo service sshd restart
```

Default password: 11235879  
Remember to change password after login using: `passwd`

## 9. Swap Script
```bash
wget https://www.moerats.com/usr/shell/swap.sh && bash swap.sh
```

## 10. Oracle DD Debian11 Script
```bash
bash <(wget --no-check-certificate -qO- 'https://moeclub.org/attachment/LinuxShell/InstallNET.sh') -d 11 -v 64 -a  -p custom_password
```

## 11. byte-unixbench Performance Test
```bash
git clone https://github.com/kdlucas/byte-unixbench.git
cd UnixBench
gcc --version
apt update
apt install build-essential
make

# Run tests:
./Run
# Show test options:
./Run -h
# Run specific test:
./Run copy-file
```

## 12. PerformanceTest Linux
```bash
wget https://image.catcat.blog/pt_linux_x64
sudo apt update
sudo apt install libncurses5
sudo ln -s /usr/lib/libncurses.so.6 /usr/lib/libncurses.so.5
sudo ldconfig
./pt_linux_x64
```

## 13. Multi-region Route Tracing
```bash
wget -N --no-check-certificate https://raw.githubusercontent.com/Chennhaoo/Shell_Bash/master/AutoTrace.sh && chmod +x AutoTrace.sh && bash AutoTrace.sh
```

## 14. Hard Drive Power-on Time Check
```bash
wget https://github.com/Aniverse/A/raw/i/a && bash a
```

## 15. network-speed.xyz
```bash
# Available regions: na, sa, eu, asia, africa, au, middle-east, india, china, iran, indonesia
curl -sL nws.sh | bash -s -- -r region_name
```

## 16. Warp Scripts
```bash
# Warp menu script
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh
# Warp-go script
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/warp-go.sh && bash warp-go.sh
```

## 17. SpeedTest Installation
```bash
sudo apt-get install curl
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.deb.sh | sudo bash
sudo apt-get install speedtest
```

## 18. China-specific Scripts
```bash
# Change mirror source
bash <(curl -sSL https://linuxmirrors.cn/main.sh)

# Docker installation
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
# Using curl
curl -fsSL https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
# Using wget
wget -O- https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
```
