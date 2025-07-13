import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1 & 2: Brand và Mô tả */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-foreground">
                Huyền Học
              </span>
            </Link>
            <p className="max-w-md dark:text-gray-300 text-gray-600">
              Khám phá trí tuệ Đông Phương thông qua các công cụ tương tác và hướng dẫn toàn diện. 
            </p>
          </div>

          {/* Cột 3: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 dark:text-white text-gray-800">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/i-ching" className="transition-colors dark:text-gray-300 dark:hover:text-blue-400 text-gray-600 hover:text-primary">
                  Kinh Dịch
                </Link>
              </li>
              <li>
                <Link href="/date-calculator" className="transition-colors dark:text-gray-300 dark:hover:text-blue-400 text-gray-600 hover:text-primary">
                  Tượng Số Học
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors dark:text-gray-300 dark:hover:text-blue-400 text-gray-600 hover:text-primary">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors dark:text-gray-300 dark:hover:text-blue-400 text-gray-600 hover:text-primary">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/20" />
        
         <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-center mt-2 md:mt-0 dark:text-gray-400 text-gray-500">
            "Sự đồng bộ là một món quà của thực tại dành cho ai thấy mà tin" <br /> Carl Jung
          </p>
        </div>
      </div>
    </footer>
  );
}
